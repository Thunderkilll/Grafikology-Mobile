package com.grfico.balack_ice.grafikology.Activities;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

import com.grfico.balack_ice.grafikology.R;

public class LoginActivity extends AppCompatActivity {

    TextView registerButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        registerButton = findViewById(R.id.textView2);
        registerButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Intent i = new Intent(LoginActivity.this,RegisterActivity.class);
                startActivity(i);

            }
        });
    }
}
