package com.example.app;

import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.content.Context;
import android.os.Build;

import androidx.annotation.NonNull;
import androidx.core.app.NotificationCompat;
import androidx.work.Worker;
import androidx.work.WorkerParameters;

public class NotificationWorker extends Worker {

    public NotificationWorker(@NonNull Context context, @NonNull WorkerParameters params) {
        super(context, params);
    }

    @NonNull
    @Override
    public Result doWork() {
        String channelId = "default_channel";
        String channelName = "Default Channel";

        NotificationManager notificationManager = (NotificationManager) getApplicationContext().getSystemService(Context.NOTIFICATION_SERVICE);

        // Create channel for Android 8+
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            NotificationChannel channel = new NotificationChannel(
                    channelId,
                    channelName,
                    NotificationManager.IMPORTANCE_DEFAULT
            );
            notificationManager.createNotificationChannel(channel);
        }

        NotificationCompat.Builder builder = new NotificationCompat.Builder(getApplicationContext(), channelId)
                .setContentTitle("Background Task")
                .setContentText("This is a background notification")
                .setSmallIcon(android.R.drawable.ic_dialog_info);

        notificationManager.notify(1, builder.build());

        return Result.success();
    }
}
