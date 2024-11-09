package com.example.game2;

import static com.example.game2.Constants.cellWidth;
import static com.example.game2.Constants.drawX;
import static com.example.game2.Constants.drawY;
import static com.example.game2.Constants.screenHeight;
import static com.example.game2.Constants.screenWidth;

import android.os.Bundle;
import android.util.DisplayMetrics;
import android.view.ViewGroup;
import android.view.WindowManager;
import android.widget.FrameLayout;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;


public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);

        DisplayMetrics dm = new DisplayMetrics();
        getWindowManager().getDefaultDisplay().getMetrics(dm);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,WindowManager.LayoutParams.FLAG_FULLSCREEN);
        screenWidth = dm.widthPixels;
        screenHeight = dm.heightPixels;
        cellWidth = screenWidth/9;

        drawX = (float) ( screenWidth - cellWidth*9)/2;
        drawY=cellWidth*3;

        setContentView(R.layout.activity_main);
        FrameLayout root_layout = findViewById(R.id.root_layout);
        FrameLayout.LayoutParams params = new FrameLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT,FrameLayout.LayoutParams.MATCH_PARENT);

        GameView gameView = new GameView(this);

        root_layout.addView(gameView);
        gameView.setLayoutParams(params);

        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.root_layout), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });
    }
}