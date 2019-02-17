package com.grfico.balack_ice.loginpim.Activities;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

import com.grfico.balack_ice.loginpim.R;
import com.jetradar.desertplaceholder.DesertPlaceholder;

public class OfflineWelcomeActivity extends AppCompatActivity {

    DesertPlaceholder desertPlaceholder ;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_offline_welcome);

         desertPlaceholder =  findViewById(R.id.placeholder1);
         desertPlaceholder.setOnButtonClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // do stuff
            }
        });
    }
}
