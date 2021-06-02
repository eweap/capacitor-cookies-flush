package com.eweap.plugins.capacitorcookiesflush;

import android.os.Build.VERSION;
import android.webkit.CookieManager;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "CookiesFlush")
public class CookiesFlushPlugin extends Plugin {

    private CookiesFlush implementation = new CookiesFlush();

    @PluginMethod
    public void flush(PluginCall call) {
        if (VERSION.SDK_INT >= 21) {
            CookieManager.getInstance().flush();
        }

        call.resolve();
    }
}
