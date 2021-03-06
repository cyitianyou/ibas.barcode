/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace barcode {
    export namespace app {

        /** 应用-条码扫描 */
        export class BarCodeScannerApp extends ibas.ResidentApplication<IBarCodeScannerView> {
            /** 应用标识 */
            static APPLICATION_ID: string = "c9323d69-2116-44a3-94b1-4456df560928";
            /** 应用名称 */
            static APPLICATION_NAME: string = "barcode_app_barcodescanner";
            /** 构造函数 */
            constructor() {
                super();
                this.id = BarCodeScannerApp.APPLICATION_ID;
                this.name = BarCodeScannerApp.APPLICATION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            private refresh: boolean = true;
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
            }
            /** 运行,覆盖原方法 */
            run(): void {
                super.run.apply(this, arguments);
            }
            private scanType: emBarCodeType;
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
                this.scanType = emBarCodeType.BAR_CODE;
                this.view.showScanner(this.scanType);
            }
        }
        /** 条码类型 */
        export enum emBarCodeType {
            /** 条码 */
            BAR_CODE,
            /** 二维码 */
            QR_CODE
        }
        /** 视图-条码扫描 */
        export interface IBarCodeScannerView extends ibas.IResidentView {
            // 扫描
            scanEvent: Function;
            // 显示屏幕
            showScanner(type: emBarCodeType): void;
        }
    }
}