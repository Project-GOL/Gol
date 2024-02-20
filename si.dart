import 'package:flutter/material.dart';
import 'package:google_generative_ai/google_generative_ai.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  late GenerativeModel _model;
  String _productName = '';

  @override
  void initState() {
    super.initState();
    // Replace with your actual API key
    _model = GenerativeModel('YOUR_API_KEY');
  }

  Future<void> _generateProductName(String category) async {
    final prompt = "Suggest creative product names in the $category category.";
    final response = await _model.generateText(prompt: prompt);
    setState(() {
      _productName = response.generatedText;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Product Idea Generator'),
        ),
        body: Padding(
          padding: EdgeInsets.all(20.0),
          child: Column(
            children: [
              TextField(
                decoration: InputDecoration(
                  labelText: 'Enter Product Category',
                ),
                onSubmitted: _generateProductName,
              ),
              SizedBox(height: 20.0),
              Text('Generated Product Name: $_productName'),
            ],
          ),
        ),
      ),
    );
  }
}
