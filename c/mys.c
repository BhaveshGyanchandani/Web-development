import pandas as pd, numpy as np, matplotlib.pyplot as plt 
from sklearn.linear_model import LogisticRegression, LinearRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.cluster import KMeans
from sklearn.ensemble import RandomForestClassifier
from sklearn.naive_bayes import GaussianNB
from sklearn.preprocessing import StandardScaler, PolynomialFeatures
from sklearn.metrics import accuracy_score, adjusted_rand_score, r2_score
from sklearn.model_selection import train_test_split
df = pd.read_csv('https://gist.githubusercontent.com/netj/8836201/raw/6f9306ad21398ea43cba4f7d537619d0e07d5ae3/iris.csv')
X = df.iloc[:, :-1]
y = df['variety']
y_encoded = pd.factorize(y)[0]
X_train, X_test, y_train, y_test = train_test_split(X, y_encoded, test_size=0.2, random_state=42)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)
models = {
    "Logistic Regression": LogisticRegression(max_iter=200),
    "Linear Regression (R2 Score)": LinearRegression(),
    "Decision Tree": DecisionTreeClassifier(random_state=42),
    "K-Nearest Neighbors": KNeighborsClassifier(),
    "K-Means Clustering (ARI)": KMeans(n_clusters=3, random_state=42, n_init=10, max_iter=300),
    "Random Forest": RandomForestClassifier(random_state=42),
    "Naive Bayes": GaussianNB(),
    "Polynomial Regression (R2 Score)": LinearRegression()
}
poly = PolynomialFeatures(degree=2)
X_train_poly = poly.fit_transform(X_train_scaled)
X_test_poly = poly.transform(X_test_scaled)
results = {}
for name, model in models.items():
    if name == "K-Means Clustering (ARI)":
        model.fit(X_train_scaled)
        score = adjusted_rand_score(y_train, model.labels_)
        results[name] = {"Train Score": score, "Test Score": None}
    elif name == "Linear Regression (R2 Score)":
        model.fit(X_train_scaled, y_train)
        train_score = r2_score(y_train, model.predict(X_train_scaled))
        test_score = r2_score(y_test, model.predict(X_test_scaled))
        results[name] = {"Train Score": train_score, "Test Score": test_score}
    elif name == "Polynomial Regression (R2 Score)":
        model.fit(X_train_poly, y_train)
        train_score = r2_score(y_train, model.predict(X_train_poly))
        test_score = r2_score(y_test, model.predict(X_test_poly))
        results[name] = {"Train Score": train_score, "Test Score": test_score}
    else:
        model.fit(X_train_scaled, y_train)
        train_score = accuracy_score(y_train, model.predict(X_train_scaled))
        test_score = accuracy_score(y_test, model.predict(X_test_scaled))
        results[name] = {"Train Score": train_score, "Test Score": test_score}

train_scores = [results[model]["Train Score"] for model in results]
test_scores = [results[model]["Test Score"] if results[model]["Test Score"] is not None else 0 for model in results]
model_names = list(results.keys())
x = np.arange(len(model_names))
width = 0.35
plt.figure(figsize=(12, 8))
plt.bar(x - width/2, train_scores, width, label='Train Score', color='blue', alpha=0.7)
plt.bar(x + width/2, test_scores, width, label='Test Score', color='orange', alpha=0.7)
plt.xlabel('Models')
plt.ylabel('Score')
plt.title('Model Performance Comparison')
plt.xticks(x, model_names, rotation=45, ha='right')
plt.legend()
plt.tight_layout()
plt.show()
best_model = max(results, key=lambda m: results[m]["Test Score"] if results[m]["Test Score"] is not None else 0)
best_test_score = results[best_model]["Test Score"]
best_train_score = results[best_model]["Train Score"]
print(f"Best Model: {best_model}")
print(f"Train Score: {best_train_score:.2f}")
print(f"Test Score: {best_test_score:.2f}")