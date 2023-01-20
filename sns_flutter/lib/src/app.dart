import 'package:flutter/material.dart';
import 'package:sns_flutter/src/screen/user/register.dart';
import 'screen/home.dart';
import 'screen/user/register.dart';

class MyApp extends StatelessWidget {
  String? token;
  MyApp(this.token, {super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      ///home: Home(),
      debugShowCheckedModeBanner: false,
      home: (token == null) ? Register() : Home(),
    );
  }
}
