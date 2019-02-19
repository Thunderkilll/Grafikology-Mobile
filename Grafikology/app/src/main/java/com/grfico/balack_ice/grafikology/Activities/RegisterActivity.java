package com.grfico.balack_ice.grafikology.Activities;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;

import com.grfico.balack_ice.grafikology.R;

public class RegisterActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);


        //if the user is already logged in we will directly start the profile activity
        if (SharedPrefManager.getInstance(this).isLoggedIn()) {
            Log.e("Shared Pref Register", "before ifs");
            if (SharedPrefManager.getInstance(this).getUser().getTypeUser().equals("admin")) {
                finish();
                Log.e("Shared Pref Register", "if admin");

                startActivity(new Intent(getApplicationContext(), AdminMainActivity.class));

                Log.e("Shared Pref Register", "after ifs");
            } else if (SharedPrefManager.getInstance(this).getUser().getTypeUser().equals("user")) {
                finish();
                Log.e("Shared Pref Register", "if admin");

                startActivity(new Intent(getApplicationContext(), MainActivity.class));

                Log.e("Shared Pref Register", "after ifs");
            }

        }
        editTextFullName = findViewById(R.id.register_full_name);
        editTextEmail = findViewById(R.id.register_email);
        editTextPassword = findViewById(R.id.register_password);
        editTextAddress = findViewById(R.id.register_address);
        editTextConfirmPassword = findViewById(R.id.register_confirm_password);


        findViewById(R.id.register_connect).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //if user pressed on button register
                //here we will register the user to server

                registerUser();
//                startActivity(new Intent(getApplicationContext(), MainActivity.class));
                Log.e("Register", "COMPLETE");
            }
        });

        findViewById(R.id.textViewLogin).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //if user pressed on login
                //we will open the login screen
                finish();
                startActivity(new Intent(RegisterActivity.this, LoginActivity.class));
            }
        });

    }
}
