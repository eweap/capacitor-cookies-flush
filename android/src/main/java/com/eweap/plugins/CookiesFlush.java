package com.eweap.plugins;

import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

import android.webkit.CookieManager;
import android.os.Build.VERSION;

@NativePlugin
public class CookiesFlush extends Plugin {
    @PluginMethod
    public void flush(PluginCall call) {
        if (VERSION.SDK_INT >= 21) {
            CookieManager.getInstance().flush();
        }
        
        call.success();
    }
}
