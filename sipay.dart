import 'package:flutter/material.dart';
import 'package:pay/pay.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Google Payr'),
        ),
        body: Center(
          child: PayButton(
            paymentConfigurationAsset: 'gpay.json',
            paymentItems: const [
              PaymentItem(
                label: 'Total',
                amount: '99.99',
                status: PaymentItemStatus.final_price,
              )
            ],
            onPaymentResult: (paymentResult) {
              // Handle the result of the payment
              if (paymentResult.status == PaymentResultStatus.success) {
                // Payment was successful
              } else {
                // Payment failed
              }
            },
            style: GooglePayButtonStyle.black,
            type: GooglePayButtonType.pay,
          ),
        ),
      ),
    );
  }
}
