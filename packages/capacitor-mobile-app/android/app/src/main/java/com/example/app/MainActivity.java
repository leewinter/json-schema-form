package com.example.app;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;

import androidx.work.PeriodicWorkRequest;
import androidx.work.WorkManager;
import androidx.work.ExistingPeriodicWorkPolicy;

import java.util.concurrent.TimeUnit;

public class MainActivity extends BridgeActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Schedule the background worker
        PeriodicWorkRequest workRequest =
            new PeriodicWorkRequest.Builder(NotificationWorker.class, 15, TimeUnit.MINUTES)
                .build();

        WorkManager.getInstance(this).enqueueUniquePeriodicWork(
            "background_notification_worker",
            ExistingPeriodicWorkPolicy.KEEP,
            workRequest
        );
    }
}
