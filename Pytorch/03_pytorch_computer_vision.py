# -*- coding: utf-8 -*-
"""03_pytorch_computer_vision.ipynb

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/drive/17Po0dLPqplyVjSXd9K9_-NldgocSCOHV

#0. computer vision libraries to be aware of

toruchvision , torchrec , torchaudio etc

`torchvision` - base domain lib for pytorch computer vision

torchvision.datasets - get datasets and daata loading functons for compouter vision here

torchvision.transforms-functions for manupulating ur vision data ( images ) to be suitable for use with an ML model

torch.utils.data.Dataset - base dataset class for pytroch

torch.utils.data.DataLoader - create a python iterable over a dataset
"""

# import matplotlib.pyplot as plt
# from sklearn.datasets import make_circles

# # Generate the circular dataset
# X, y = make_circles(n_samples=200, noise=0.8, factor=0.5)

# # Plot the points
# plt.scatter(X[:, 0], X[:, 1], c=y, cmap=plt.cm.Paired)
# plt.title("Circles Dataset with Class Overlap")
# plt.show()
# noise changes the plot

import torch

from torch import nn
import torchvision
from torch.utils.data import DataLoader
from torchvision import datasets
from torchvision.transforms import ToTensor , Lambda , Compose
import matplotlib.pyplot as plt

train_data = datasets.FashionMNIST(
    root = "data",
    train = True,
    download = True,
    transform = ToTensor()
)

test_data = datasets.FashionMNIST(
    root = "data",
    train = False,
    download = True,
    transform = ToTensor()
)

len(train_data) , len(test_data)

class_names = train_data.classes
class_names

"""#so what actually color channel are ...??
so colour channel are bascially .....colour channels......means ......lets say there is a grayscale image which usually contains white and black colour and colour in between themm....which we can say ....0 is for black , 1 is for white and whatever in between 0 and 1 is a shade of black.......
from 0 to 1 the colour gets more lighter.

so when we say the colour channel for grayscale image is 1 means there are only 2 colours .....

when we say colour channel is 3 means there are 3 colour where each colour goes froom 0 to 1 ......( well basically it would be 4 since when it gets super light i.e when it reaches 1 it becomes white so its white and 3 others but we dont say its 4 since we get white when we set it to 1 ).......

so a pixel can be represented by combination of 3 colour channels....
[ 0.3 0.5 0.9 ] means red will be ( lighter if u think 0 is white and darker if u think 0 is pure red ) green which is 0.5 will be in b/w light and dark and yelllow will be pure yellow

so thats how it works as their combination can creeate more colours

#1.2 visualozing our data
"""

image , label = train_data[0]
print(f"image shape : {image.shape}")
print(f"label : {label}")
# image is our tensor data

# plt.imshow(image) shows error
plt.imshow(image.squeeze() )
plt.show()

plt.imshow(image.squeeze() , cmap = "gray")
plt.show()

torch.manual_seed(42)

fig=plt.figure(figsize=(9,9))
rows , cols = 4,4

for i in range( 1, rows*cols+1):
    random_idx = torch.randint(0,len(train_data),size=[1]).item()
    img , label = train_data[random_idx]
    fig.add_subplot(rows,cols,i)
    plt.imshow(img.squeeze(),cmap="gray")
    plt.title(class_names[label],fontsize=14)
    plt.axis(False)
plt.show()

from torch.utils.data import DataLoader

#setup batch size
BATCH_SIZE = 32

#turn dataset into iterables ( batches )
train_dataLoader = DataLoader(
    train_data,
    batch_size = BATCH_SIZE,
    shuffle = True #shuffle the data on training so the model doesnt learn the data with their indexes
)

test_dataLoader = DataLoader(
    test_data,
    batch_size = BATCH_SIZE,
    shuffle = False # we can turn shuffling off while testing since model havent seen test data anyway
)

train_dataLoader , test_dataLoader

#Lets check out what we have created
print(f"dataloaders : {train_dataLoader , test_dataLoader}")
print(f"length of train dataloader : {len(train_dataLoader)} batches of {BATCH_SIZE}")
print(f"length of test dataloader : {len(test_dataLoader)} batches of {BATCH_SIZE}")

#Checkout whats inside the training dataloader

train_features_batch , train_labels_batch = next(iter(train_dataLoader))
print(f"feature batch shape : {train_features_batch.shape}")
print(f"label batch shape : {train_labels_batch.shape}")

torch.manual_seed(42)

random_idx = torch.randint(0,len(train_features_batch),size=[1]).item()
image , label = train_features_batch[random_idx] , train_labels_batch[random_idx]

print(f"image shape : {image.shape}")
print(f"label : {label}")

plt.imshow(image[0].squeeze(),cmap="gray")
plt.title(class_names[label])
plt.show()

image , label = next(iter(train_dataLoader))
print(f"image shape : {image.shape}")
print(f"label shape : {label.shape}")

""" ##3.Model 0 :  build a baseline model

 when starting to build a series od ML modelling experiments its a best prractices to start witha baseline modeel

 A baseline model is simple model you will tMry and improve upon with subsequent models / experiments.

 In other words : start simply and add complexity when necessary
"""

#flattena a continguous rannge of dimensions into a tensor
flatten_model = nn.Flatten()

#geta a single sample
x = train_features_batch[0]

#flatten the sample
output  = flatten_model(x) # perform forward pass

#print what  happended

print(f"{x.shape}")
print(f"{output.shape}")

from torch import nn

class FashionMNISTModelV0(nn.Module):
    def __init__(self,input_shape:int,
                 hidden_units:int,
                 output_shape:int):
        super().__init__()
        self.layer_stack = nn.Sequential(
            nn.Flatten(), # flatten our data first
            nn.Linear(in_features=input_shape,out_features=hidden_units),
            nn.Linear(in_features=hidden_units ,
                      out_features = output_shape)
        )

    def forward(self,x:torch.Tensor):
        return self.layer_stack(x)

torch.manual_seed(42)

#setup model with input parameters

model_0 = FashionMNISTModelV0(
    input_shape = 784, #28*28
    hidden_units = 10, # how many units in hidden layer
    output_shape = len(class_names) # one for every class
).to("cpu")

model_0

dummy_x = torch.rand([1,1,28,28])
model_0(dummy_x)

"""#3.1 Setup loss and optimizwr function"""

import requests
from pathlib import Path

# Setup device agnostic code
device = "cuda" if torch.cuda.is_available() else "cpu"
device

if Path("helper_functions.py").is_file():
  print("helper_functions.py already exists, skipping download")
else:
  print("Downloading helper_functions.py")
  #download the helper functions from the github repo
  request = requests.get("https://raw.githubusercontent.com/mrdbourke/pytorch-deep-learning/main/helper_functions.py")
  with open("helper_functions.py","wb") as f:
    f.write(request.content)

#import accuracy funtion

from helper_functions import accuracy_fn

#setup loss fn and optimizer

loss_fn = nn.CrossEntropyLoss()
optimizer = torch.optim.SGD(params = model_0.parameters(),
                            lr = 0.1)

loss_fn , optimizer
#

"""##Creating functoin to time our experiments

"""

from timeit import default_timer as timer

def print_train_time(
    start : float ,
    end : float ,
    device : torch.device = None
):
    total_time = end - start
    print(f"Train time on {device} : {total_time:.3f} seconds")
    return total_time

start_time = timer()

#train the model
end_time = timer()
print_train_time(start_time,end_time,device)

"""#Note that optimizer willll update models parameters once per batch not once per epoch

#3.3 Creating a training loop and dtraining a model on batchess of data

1. Loop through epochs
2. Loop through trainiing batches , perform steps and calculate the train loss *per batch* .
3. Loop through testing batches , perform testing steps , calculate the test loss *per batch*
4. print whats happening
5. Time it all (for fun )
"""

from os import EX_PROTOCOL
torch.manual_seed(42)
train_time_start_on_cpu = timer()

epochs = 3

for epoch in range(epochs):
    print(f"Epoch : {epoch}\n------------")

    #training
    train_loss = 0
    train_acc = 0

    # our batch coomes in formof image i.e data in X and labels in y.....
    for batch , (X,y) in enumerate(train_dataLoader):
        model_0.train()

        X , y = X.to(device) , y.to(device)

        #1.forward pass
        y_pred = model_0(X) # paass data on trained model and predict label

        #2.calculate the loss
        loss = loss_fn(y_pred,y) # compare the loss in prediction and actual label

        train_loss += loss # accumulate loss in evvry batch ( just for fun)

        train_acc += accuracy_fn(y_true=y,y_pred=y_pred.argmax(dim=1)) # same for it

        #3. turn optimizer grad to 0

        optimizer.zero_grad()

        #4.backpropogation
        loss.backward()

        #5.optimzation of parameters....Note that optimizer willll update models parameters once per batch not once per epoch
        optimizer.step()

        if batch % 400 == 0:
            print(f"Looked at {batch * len(X)}/{len(train_dataLoader.dataset)} samples")

    #  Divide total train loss by length of train dataloader
    train_loss /= len(train_dataLoader)
    train_acc /= len(train_dataLoader)

    #Testing
    test_loss, test_acc =0 ,0
    model_0.eval()
    with torch.inference_mode():
        for X_test,y_test in test_dataLoader:
          #since X is the data and y is the actual label....its same as for X,y in test_dataLoader

            X,y = X.to(device) , y.to(device)

            #1. forward pass
            test_pred = model_0(X_test) # the raw output of our model will be logits

            #2. calculate testloss
            test_loss += loss_fn(test_pred,y_test)

            #3. calculate accuracy
            test_acc+=accuracy_fn(y_true= y_test , y_pred = test_pred.argmax(dim=1)) # since the test_pred is logits and accuracy_fn thinks y_test and y_pred to be of same DATATYPE .....so we have to call argmax to find the logits value with highest index and that will be the prediction label , and now we will compare the labels with labels in accuracy funciotn.....thats what argmax does

        #calculae the test loss avg per batch

        test_loss /= len(test_dataLoader)

        #calculae the test accuracy avg per batch

        test_acc /= len(test_dataLoader)

    #print whats happening
    print(f"\nTrain loss : {train_loss:.5f} | Train accuracy : {train_acc:.2f}% | Test loss : {test_loss:.5f} | Test accuracy : {test_acc:.2f}%")

      #calculate training time

train_time_end_on_cpu = timer()
total_train_time_model_0 = print_train_time(start=train_time_start_on_cpu,
                                            end = train_time_end_on_cpu,
                                                    device=str(next(model_0.parameters()).device))

"""#4. Make predictions and get Model 0 results"""

torch.manual_seed(42)

def eval_model(model : torch.nn.Module ,
              data_loader : torch.utils.data.DataLoader ,
              loss_fn : torch.nn.Module ,
              device : torch.device = device):
  loss , acc = 0, 0
  model.eval()

  with torch.inference_mode():
    for X , y in data_loader:
      X , y = X.to(device) , y.to(device)

      #make predictions
      y_pred = model(X)

      #accumulate hte loss and acc
      loss+= loss_fn(y_pred,y)
      acc+=accuracy_fn(y_true=y,y_pred=y_pred.argmax(dim=1))

    loss /= len(data_loader)
    acc /= len(data_loader)

  return {"model_name ": model.__class__.__name__,
          "model_lpss": loss.item(),
          "model_acc": acc}

#calculate mode;_0 results on test dataset
model_0_results = eval_model(model=model_0,
                             data_loader=test_dataLoader,
                             loss_fn=loss_fn)
model_0_results

"""#5. setup agnostic code"""

device = "cuda" if torch.cuda.is_available() else "cpu"
device

"""#6. Building a better model in non linearity"""

#create a non linear model.....using relu layer inbetween liner layers

class FashionMNISTModelV1(nn.Module):
  def __init__(self,input_shape:int,hidden_units:int,output_shape:int):
    super().__init__()
    self.layer_stack = nn.Sequential(
        nn.Flatten(),
        nn.Linear(in_features=input_shape ,out_features= hidden_units ),
        nn.ReLU(),
        nn.Linear(in_features=hidden_units,out_features=output_shape),
        nn.ReLU()
    )

  def forward(self,x:torch.Tensor):
    return self.layer_stack(x)

model_1 = FashionMNISTModelV1(
    input_shape=784,
    hidden_units=10,
    output_shape=len(class_names)).to(device)

model_1

#creating a loss funciton and opotimizer

loss_fn = nn.CrossEntropyLoss() # bcz we are working with multiclass classification
optimizer = torch.optim.SGD(params=model_1.parameters(),lr=0.1)

loss_fn , optimizer

torch.manual_seed(42)

epochs = 3
train_loss ,train_acc , test_loss ,test_acc= 0 , 0 , 0 , 0

train_time_start_on_cpu = timer()

for epoch in range(epochs):
  print(f"Epoch : {epoch}\n------------")

  loss , acc = 0 , 0

  for batch , (X,y) in enumerate(train_dataLoader):
    model_1.train()

    X , y = X.to(device) , y.to(device)

    y_pred = model_1(X)

    loss = loss_fn(y_pred,y)

    train_loss += loss

    train_acc += accuracy_fn(y_true=y,y_pred=y_pred.argmax(dim=1))

    optimizer.zero_grad()

    loss.backward()

    optimizer.step()

    if batch % 400 == 0:
      print(f"Looked at {batch * len(X)}/{len(train_dataLoader.dataset)} samples")

  train_loss /= len(train_dataLoader)
  train_acc /= len(train_dataLoader)
  #testuing

  model_1.eval()
  with torch.inference_mode():
    for X_test,y_test in (test_dataLoader):
      X_test , y_test = X.to(device) , y.to(device)

      test_pred = model_1(X_test)

      test_loss+=loss_fn(test_pred,y_test)
      test_acc+=accuracy_fn(y_true= y_test , y_pred = test_pred.argmax(dim=1))

    test_loss /= len(test_dataLoader)
    test_acc /= len(test_dataLoader)

  print(f"\nTrain loss : {train_loss:.5f} | Train accuracy : {train_acc:.2f}% | Test loss : {test_loss:.5f} | Test accuracy : {test_acc:.2f}%")

"""# WATCH HOW DANIEL CREATEED THE TRAIN AND TESTING FUNCTION SO THAT WE DONT HAVE TO WRITE IT ALL OVER AGAIN"""

def train_step(
    model:torch.nn.Module,
    data_loader:torch.utils.data.DataLoader,
    loss_fn:torch.nn.Module,
    optimizer:torch.optim.Optimizer,
    device:torch.device,
    accuracy_fn,
                ):
  train_loss , train_acc = 0 , 0

  for batch , (X,y) in enumerate(data_loader):
    model.train()

    X , y = X.to(device) , y.to(device)

    y_pred = model(X)

    loss = loss_fn(y_pred,y)

    train_loss += loss

    train_acc += accuracy_fn(y_true=y,y_pred=y_pred.argmax(dim=1))

    optimizer.zero_grad()

    loss.backward()

    optimizer.step()

  train_loss /= len(data_loader)
  train_acc /= len(data_loader)

  print(f"\nTrain loss : {train_loss:.5f} | Train accuracy : {train_acc:.2f}%")

def test_step(model : torch.nn.Module ,
              data_loader : torch.utils.data.DataLoader ,
              loss_fn : torch.nn.Module ,
              accuracy_fn,
              device : torch.device = device):

  test_loss , test_acc = 0, 0
  model.eval()

  with torch.inference_mode():
    for X , y in data_loader:
      X , y = X.to(device) , y.to(device)

      #make predictions
      test_pred = model(X)

      #accumulate hte loss and acc
      test_loss+= loss_fn(test_pred,y)
      test_acc+=accuracy_fn(y_true=y,y_pred=test_pred.argmax(dim=1))

    test_loss /= len(data_loader)
    test_acc /= len(data_loader)

    print(f"Test loss :{test_loss:.5f} | Test acc :{test_acc:.5f}")

def eval_model(model : torch.nn.Module ,
              data_loader : torch.utils.data.DataLoader ,
              loss_fn : torch.nn.Module ,
              accuracy_fn,
              device : torch.device = device):
  loss , acc = 0, 0
  model.eval()

  with torch.inference_mode():
    for X , y in data_loader:
      X , y = X.to(device) , y.to(device)

      #make predictions
      y_pred = model(X)

      #accumulate hte loss and acc
      loss+= loss_fn(y_pred,y)
      acc+=accuracy_fn(y_true=y,y_pred=y_pred.argmax(dim=1))

    loss /= len(data_loader)
    acc /= len(data_loader)

  return {"model_name ": model.__class__.__name__,
          "model_lpss": loss.item(),
          "model_acc": acc}

torch.manual_seed(42)

epochs = 3

model_1_train = train_step(model=model_1,
           data_loader=train_dataLoader,
           loss_fn=loss_fn,
           optimizer=optimizer,
           device=device,
           accuracy_fn=accuracy_fn)

#calculate mode;_0 results on test dataset
test_step(model=model_1,
                             data_loader=test_dataLoader,
                             accuracy_fn=accuracy_fn,
                             loss_fn=loss_fn)

model_1_results = eval_model(model=model_1,
                             data_loader=test_dataLoader,
                             loss_fn=loss_fn,
                             accuracy_fn=accuracy_fn)
model_1_results

"""#Model 2: Building a convolutional Neural network ( CNN )

CNN's are also known as ConvNets

CNN's   are known for their capabilities to fund pattern in visual data

a convutional block is compriesed of :
 1.  convolutional layer
 2.  ReLU activation layer
 3.  pooling layer

these layers can be in any order or any number.....

 a group of convulotional block makes a deeper CNN while only 1 makes a simple CNN....

 the more the blocks the deeper the model gets.....
"""

class FashionMNISTModelV2(nn.Module):
  def __init__(self,input_shape:int,hidden_units:int,output_shape:int):
    super().__init__()
    self.conv_block_1 = nn.Sequential(
        nn.Conv2d(in_channels=input_shape,
              out_channels=hidden_units,
              kernel_size=3, # can also be (3,3)
              stride=1,
              padding=1),  # these are our hyperparameters

         nn.ReLU(),

        nn.Conv2d(
          in_channels=hidden_units,
          out_channels=hidden_units,
          kernel_size=3,
          stride=1,
          padding=1),

          nn.ReLU(),

        nn.MaxPool2d(kernel_size=2,
                 stride=2)
    )
    # this is 1 convolutional block

    self.conv_block_2 = nn.Sequential(
        nn.Conv2d(in_channels=hidden_units, # Change in_channels to hidden_units
              out_channels=hidden_units,
              kernel_size=3, # can also be (3,3)
              stride=1,
              padding=1),  # these are our hyperparameters

         nn.ReLU(),
        nn.Conv2d(
          in_channels=hidden_units,
          out_channels=hidden_units,
          kernel_size=3,
          stride=1,
          padding=1),

        nn.ReLU(),

         nn.MaxPool2d(kernel_size=2,
                 stride=2)
    ) #this is another convo block.......we can make as many as we want......

    # now we want an output layer.......so in previous models what we did was FLATTEN THE OUTPUT OF FINAL LAYER.......so this is what we will do again here

    self.classifier = nn.Sequential(
        nn.Flatten(),
        nn.Linear(in_features=hidden_units*7*7, # why to use 7 ?.....it can be calculated using the formula of it described in its documentation or daniels video
                out_features=output_shape)

        # outputshape is basically length of classes we have
    )

  def forward(self,x:torch.Tensor):
    x = self.conv_block_1(x)
    # print(f" output shape  of conv1 : {x.shape}")
    x = self.conv_block_2(x)
    # print(f"output shape  of conv2 : {x.shape}")
    x = self.classifier(x)
    # print(f"output shape  of classifier: {x.shape}")


    # or x = self.classifier(self.conv_block_2( self.conv_block_1(x)))
    return x

torch.manual_seed(42)

# input shape is the number of colour channels in out images ....which we talked before about grayscale having 1 while RGB having 3

model_2 = FashionMNISTModelV2(
    input_shape=1,
    hidden_units=10,
    output_shape=len(class_names)).to(device)

model_2

"""# 7.1 stepping into `nn.Conv2d()`"""

torch.manual_seed(42)

images  = torch.randn(size=(32,3,64,64))
images[0]

#creating a single conv layer

conv_layer = nn.Conv2d(in_channels=3,
                out_channels=10,
                kernel_size=(3,3),
                stride=1,
                padding=1)


#pass the data throught thw convolutional layer

# conv_layer(images)

rand_image_tensor = torch.randn(size=(1,28,28)).unsqueeze(dim=0).to(device)
rand_image_tensor.shape

model_2(rand_image_tensor)

"""# 7.3 setting up loss funtion and optimizer"""

from helper_functions import accuracy_fn
from timeit import default_timer as timer
from tqdm.auto import tqdm

loss_fn = nn.CrossEntropyLoss()

optimizer= torch.optim.SGD(params=model_2.parameters(),lr=0.1)

"""# 7.4 Training nd testing loop of model 2 using functions"""

torch.manual_seed(42)

epochs = 3

train_time_start_on_cpu = timer()

for epoch in range(epochs):
  print(f"\nEpoch : {epoch}\n------------")

  train_step(model=model_2,
             data_loader = train_dataLoader,
             optimizer= optimizer ,
             loss_fn=loss_fn,
             accuracy_fn=accuracy_fn,
             device=device)

  test_step(model=model_2,
            data_loader=test_dataLoader,
            loss_fn=loss_fn,
            accuracy_fn=accuracy_fn)

model_2_results = eval_model(
    model=model_2,
    data_loader=test_dataLoader,
    loss_fn=loss_fn,
    accuracy_fn=accuracy_fn
)

"""#8 compare model results and training time...."""

import pandas as pd

compare_results = pd.DataFrame(
    [
     model_0_results,
     model_1_results,
     model_2_results
    ]
)

compare_results

"""#9. make and evaluate random predictions with best model"""

def make_predictions(model:torch.nn.Module,
                     data:list,
                     device:torch.device = device):

  pred_probs = []
  model.eval()
  with torch.inference_mode():
    for sample in data:

      #prepare the sample ( add a batch dimension and pass to target device )
      sample = torch.unsqueeze(sample,dim=0).to(device)

      #forward pass
      pred_logit = model(sample)

      #get prediction probabillity

      pred_prob = torch.softmax(pred_logit.squeeze(),dim=0)

      #get pred_prob off the GPU for further caclulations
      pred_probs.append(pred_prob.cpu())

  #stack the pred_probs to turn list into a tensor
  return torch.stack(pred_probs)

import random

# random.seed(42)
test_samples = [ ]

test_labels=[ ]

for sample , label in random.sample(list(test_data),k=9):
  test_samples.append(sample)
  test_labels.append(label)

#vir=ew rhe first sample shape

test_samples[0].shape

plt.imshow(test_samples[0].squeeze(),cmap="gray")
plt.title(class_names[test_labels[0]])

#make predictions

pred_probs = make_predictions(model=model_2,
                              data=test_samples)


#view the first two prediction probabilities samples

pred_probs[:2]

#convert the prediction probabilities to labels

pred_classes = pred_probs.argmax(dim=1)
pred_classes , test_labels  # we got both same means we are going in correct direction

#plot prediction

plt.figure(figsize=(9,9))
nrows = 3
ncols = 3
for i,sample in enumerate(test_samples):
  plt.subplot(nrows,ncols,i+1)
  plt.imshow(sample.squeeze(),cmap="gray")

  #find prediciton in text form
  pred_label = class_names[pred_classes[i]]

  #find the true label
  true_label = class_names[test_labels[i]]

  #create a title text

  title_text = f"Pred : {pred_label} | True : {true_label}"

  if pred_label == true_label:
    plt.title(title_text ,fontsize =10 , c="g")
  else:
    plt.title(title_text ,fontsize =10 , c="r")

  plt.axis(False)

"""#there is more in this seciton of about 1 hr more.......so watch it later on....."""