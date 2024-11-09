package com.example.imeiimsiapp

import android.Manifest
import android.content.pm.PackageManager
import android.os.Bundle
import android.telephony.TelephonyManager
import android.widget.EditText
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import com.example.imeiimsiapp.R
import androidx.core.content.getSystemService
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import androidx.lifecycle.viewmodel.CreationExtras

class new : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)

        // whenever we want to acces the android we ask for the permission to acccess our android..ie. by
        if(ActivityCompat.checkSelfPermission(this, Manifest.permission.READ_PHONE_STATE)!=PackageManager.PERMISSION_GRANTED) //i.e permission not granted then do...
            ActivityCompat.requestPermissions(this, arrayOf(Manifest.permission.READ_PHONE_STATE),111)
        else // if permission is alreadyy granted by the user then get telephoniy details
            getTelephonyDetails()

    }

    override fun onRequestPermissionsResult( // if our permission is granted then check for requesrt code and grant results
        requestCode: Int,
        permissions: Array<out String>,
        grantResults: IntArray
    ) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)
        if(requestCode==111 && grantResults[0]==PackageManager.PERMISSION_GRANTED) //i.e if permission is granted then get telephony details
            getTelephonyDetails()
        // now our checking of permisionn is over but we need to define this permissoin in permissionn file....go to manifest fiel
        // i.e <uses-permission android:name="android.permission.READ_PHONE_STATE"></uses-permission>
        // <uses-permission android:name="android.permission.READ_PRIVILEGED_PHONE_STATE"
        // tools:ignore="ProtectedPermissions" />

    }

    private fun getTelephonyDetails() {
        /// tp get telephonhy details do...

        var tm : TelephonyManager = getSystemService(TELEPHONY_SERVICE) as TelephonyManager // neccersaary to use alias o/w it wont work as we wrote it in TelephonyManager
        if (ActivityCompat.checkSelfPermission( // if permision not grated by user then return this else give the var below info we wrote
                this,
                Manifest.permission.READ_PHONE_STATE
            ) != PackageManager.PERMISSION_GRANTED
        ) {

            return
        }
        var data: String =  tm.deviceSoftwareVersion+"\n"+tm.simSerialNumber
        var EditText = findViewById<EditText>(R.id.editText)
        // Set the data to the EditText
        EditText.setText(data)
    }

}