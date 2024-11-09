package com.example.game2;

import static android.opengl.ETC1.getHeight;

import static com.example.game2.Constants.cellWidth;
import static com.example.game2.Constants.screenWidth;

import android.content.Context;
import android.content.res.AssetManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import java.io.IOException;
import java.io.InputStream;

public class SpriteSheet {
    public Bitmap topBG;
    public Bitmap bottomBG;

    public Bitmap middleBG;
    private Bitmap jewelsBMP;
    public Bitmap red;
    public Bitmap orange;
    public Bitmap yellow;
    public Bitmap green;
    public Bitmap blue;
    public Bitmap purple;

    public SpriteSheet(Context context) {
        AssetManager assetManager = context.getAssets();

        try {
            InputStream istr = assetManager.open("top_bg.jpg");
            topBG = BitmapFactory.decodeStream(istr); // Decode the InputStream to a Bitmap
            topBG = Bitmap.createBitmap(topBG, 0, 0, topBG.getWidth(), topBG.getHeight());
            topBG = Bitmap.createScaledBitmap(topBG, screenWidth, cellWidth * 5, false);

            istr = assetManager.open("bottom_bg.jpg");
            bottomBG = BitmapFactory.decodeStream(istr);
            bottomBG = Bitmap.createBitmap(bottomBG, 0, 0, bottomBG.getWidth(), bottomBG.getHeight());
            bottomBG = Bitmap.createScaledBitmap(bottomBG, screenWidth, bottomBG.getHeight()*2, false);

            istr = assetManager.open("jewel_bg.png");
            middleBG = BitmapFactory.decodeStream(istr);
            middleBG = Bitmap.createBitmap(middleBG, 0, 0, middleBG.getWidth(), middleBG.getHeight());
            middleBG = Bitmap.createScaledBitmap(middleBG, screenWidth, cellWidth * 9, false);

            istr=assetManager.open("red.jpg");
            jewelsBMP=BitmapFactory.decodeStream(istr);
            jewelsBMP=Bitmap.createBitmap(jewelsBMP,0,0,jewelsBMP.getWidth(),jewelsBMP.getHeight());
            red=Bitmap.createBitmap(jewelsBMP,0,0,50,50);
            //0,0 is coordinate of bitmap and 51,51 is wid x heighti of jewel
            red= Bitmap.createScaledBitmap(red,cellWidth,cellWidth,false);

            istr=assetManager.open("blue2.png");
            jewelsBMP=BitmapFactory.decodeStream(istr);
            jewelsBMP=Bitmap.createBitmap(jewelsBMP,0,0,jewelsBMP.getWidth(),jewelsBMP.getHeight());
            blue=Bitmap.createBitmap(jewelsBMP,0,0,50,50);
            blue= Bitmap.createScaledBitmap(blue,cellWidth,cellWidth,false);


            istr=assetManager.open("yellow2.png");
            jewelsBMP=BitmapFactory.decodeStream(istr);
            jewelsBMP=Bitmap.createBitmap(jewelsBMP,0,0,jewelsBMP.getWidth(),jewelsBMP.getHeight());
            yellow=Bitmap.createBitmap(jewelsBMP,0,0,50,50);
            yellow= Bitmap.createScaledBitmap(yellow,cellWidth,cellWidth,false);

            istr=assetManager.open("purple2.png");
            jewelsBMP=BitmapFactory.decodeStream(istr);
            jewelsBMP=Bitmap.createBitmap(jewelsBMP,0,0,jewelsBMP.getWidth(),jewelsBMP.getHeight());
            purple=Bitmap.createBitmap(jewelsBMP,0,0,50,50);
            purple= Bitmap.createScaledBitmap(purple,cellWidth,cellWidth,false);

            istr=assetManager.open("orange2.png");
            jewelsBMP=BitmapFactory.decodeStream(istr);
            jewelsBMP=Bitmap.createBitmap(jewelsBMP,0,0,jewelsBMP.getWidth(),jewelsBMP.getHeight());
            orange=Bitmap.createBitmap(jewelsBMP,0,0,50,50);
            orange= Bitmap.createScaledBitmap(orange,cellWidth,cellWidth,false);

            istr=assetManager.open("green2.png");
            jewelsBMP=BitmapFactory.decodeStream(istr);
            jewelsBMP=Bitmap.createBitmap(jewelsBMP,0,0,jewelsBMP.getWidth(),jewelsBMP.getHeight());
            green=Bitmap.createBitmap(jewelsBMP,0,0,50,50);
            green= Bitmap.createScaledBitmap(green,cellWidth,cellWidth,false);


        } catch (IOException e) {
            System.out.println("Error loading image: " + e.getMessage());
        }
    }


}





