package com.grfico.balack_ice.loginpim.Activities;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.widget.ProgressBar;

import com.grfico.balack_ice.loginpim.R;

public class LoadingActivity extends Activity {


    ProgressBar prg;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_loading);
        prg = findViewById(R.id.loadingbar);
        prg.setMax(100);
        prg.setProgress(0);
        Thread loadingthread = new Thread(){
            @Override
            public void run() {
                try {

              for (int i = 0 ; i < 100 ; i++ ){
                  prg.setProgress(i);
                  sleep(50); //time 50*100 = 5000 = 5 secs
                  //TODO : load mes web service ici and test if all the web services are successuful if not go offline
              }
                } catch (InterruptedException e) {
                    // do nothing
                } finally {
                    Intent intent = new Intent(LoadingActivity.this,
                            OfflineWelcomeActivity.class);//LoginActivity.class CoursEnglishActivity
                    intent.setFlags(Intent.FLAG_ACTIVITY_NO_ANIMATION);
                    startActivity(intent);
                    LoadingActivity.this.finish();
                }
            }

        };
        loadingthread.start();
    }



}
