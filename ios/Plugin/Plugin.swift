import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CookiesFlush)
public class CookiesFlush: CAPPlugin {

    @objc func flush(_ call: CAPPluginCall) {
        call.success()
    }
}
