package com.grfico.balack_ice.loginpim.Activities;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.content.Intent;
import android.view.View;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.grfico.balack_ice.loginpim.R;

public class MainActivity extends AppCompatActivity {
RelativeLayout login_btn ;
TextView register_btn;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);
        login_btn = findViewById(R.id.login_btn);
        register_btn = findViewById(R.id.textView2);
        login_btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //TODO: call web service to check if the user exist and test it's role
             Intent i = new Intent(MainActivity.this , LoadingActivity.class);

             startActivity(i);
            }
        });
        register_btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //TODO: call web service to check if the user exist and test it's role
                Intent i = new Intent(MainActivity.this , SignInActivity.class);

                startActivity(i);
            }
        });
    }
}
