import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CookiesFlushPlugin)
public class CookiesFlushPlugin: CAPPlugin {
    private let implementation = CookiesFlush()

    @objc func flush(_ call: CAPPluginCall) {
        call.resolve()
    }
}
