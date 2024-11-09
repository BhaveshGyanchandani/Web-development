package com.example.imeiimsiapp

import android.Manifest
import android.content.pm.PackageManager
import android.os.Bundle
import android.telephony.TelephonyManager
import android.util.Log
import android.widget.EditText
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import com.example.imeiimsiapp.R

class MainActivity : AppCompatActivity() {

    companion object {
        private const val REQUEST_CODE = 111 // Request code for permissions
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)

        // Check for permission to access phone state
        if (ActivityCompat.checkSelfPermission(
                this,
                Manifest.permission.READ_PHONE_STATE
            ) != PackageManager.PERMISSION_GRANTED
        ) {
            ActivityCompat.requestPermissions(
                this,
                arrayOf(Manifest.permission.READ_PHONE_STATE),
                REQUEST_CODE
            )
        } else {
            getTelephonyDetails() // Permission already granted
        }
    }

    override fun onRequestPermissionsResult(
        requestCode: Int,
        permissions: Array<out String>,
        grantResults: IntArray
    ) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)
        if (requestCode == REQUEST_CODE) {
            if (grantResults.isNotEmpty() && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                getTelephonyDetails() // Permission granted, get details
            } else {
                // Handle the case where permission was denied
                // You can show a message to the user explaining why the permission is necessary
            }
        }
    }


    private fun getTelephonyDetails() {
        val tm: TelephonyManager = getSystemService(TelephonyManager::class.java)

        // Check for permission again
        if (ActivityCompat.checkSelfPermission(
                this,
                Manifest.permission.READ_PHONE_STATE
            ) != PackageManager.PERMISSION_GRANTED
        ) {
            return
        }

        try {
//            val deviceVersion = tm.deviceSoftwareVersion ?: "N/A" // Default if null
//            val simSerialNumber = tm.simSerialNumber ?: "N/A" // Default if null

            // Prepare the data string
            val data = "Software Version: deviceVersion\nSIM Serial Number: simSerialNumbe"
            val editText = findViewById<EditText>(R.id.editText)
            editText.setText(data)
        } catch (e: Exception) {
            Log.e("MainActivity", "Error getting telephony details", e)
            // You can also show an error message in the UI
        }
    }
}
