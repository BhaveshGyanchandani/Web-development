package com.example.game2;

import android.app.PendingIntent;
import android.graphics.Bitmap;
import android.graphics.Canvas;

public class Jewel {
    public int poseX;
    public int poseY;
    public int color;


    public Jewel ( int poseX , int poseY, int color){
        this.color=color;
        this.poseX=poseX;
        this.poseY=poseY;
    }

    public  void drawJewel(Canvas canvas , SpriteSheet spriteSheet){
        Bitmap jewelBitmap=null;
        switch (color){
            case 1: canvas.drawBitmap(spriteSheet.red,poseX,poseY,null); break;
            case 2: canvas.drawBitmap(spriteSheet.orange,poseX,poseY,null); break;
            case 3: canvas.drawBitmap(spriteSheet.yellow,poseX,poseY,null); break;
            case 4: canvas.drawBitmap(spriteSheet.green,poseX,poseY,null); break;
            case 5: canvas.drawBitmap(spriteSheet.blue,poseX,poseY,null); break;
            case 6: canvas.drawBitmap(spriteSheet.purple,poseX,poseY,null); break;
        }
        if (jewelBitmap != null) {
            canvas.drawBitmap(jewelBitmap, poseX, poseY, null);
        }
    }

}