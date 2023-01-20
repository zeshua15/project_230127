import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:sns_flutter/src/repository/user_repo.dart';

import '../home.dart';

class Register extends StatefulWidget {
  const Register({super.key});

  @override
  State<Register> createState() => _RegisterState();
}

class _RegisterState extends State<Register> {
  final _formKey = GlobalKey<FormState>();
  final _nameController = TextEditingController();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  final userRepo = UserRepo();

  void _submitButton() async {
    final prefs = await SharedPreferences.getInstance();

    if (_formKey.currentState!.validate()) {
      String name = _nameController.text;
      String email = _emailController.text;
      String password = _passwordController.text;

      String? token = await userRepo.login(name, email, password);
      if (token != null) {
        await prefs.setString('token', token);
        Navigator.pushReplacement(
            context, MaterialPageRoute(builder: (b) => Home()));
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
          child: Container(
        padding: EdgeInsets.symmetric(horizontal: 30),
        child: Form(
            key: _formKey,
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                const Text(
                  '회원가입',
                  style: TextStyle(fontSize: 20),
                ),
                const SizedBox(height: 20),
                const Text(
                  "현장실습",
                  textAlign: TextAlign.center,
                  style: TextStyle(color: Colors.grey),
                ),
                const SizedBox(height: 20),
                TextFormField(
                  controller: _nameController,
                  decoration: InputDecoration(
                    labelText: ('이름'),
                  ),
                  validator: (value) {
                    if (value == null || value.trim().isEmpty) {
                      return "이름을 입력해야 합니다";
                    }
                    return null;
                  },
                ),
                TextFormField(
                    controller: _emailController,
                    decoration: InputDecoration(labelText: ('아이디')),
                    validator: (value) {
                      if (value == null || value!.trim().isEmpty) {
                        return "아이디를 입력해야 합니다";
                      }
                      return null;
                    }),
                TextFormField(
                    controller: _passwordController,
                    obscureText: true,
                    decoration: const InputDecoration(labelText: ('비밀번호')),
                    validator: (value) {
                      if (value == null || value!.trim().isEmpty) {
                        return "패스워드를 입력해야 합니다";
                      }
                      return null;
                    }),
                SizedBox(height: 20),
                ElevatedButton(
                    onPressed: _submitButton, child: const Text("가입하기")),
              ],
            )),
      )),
    );
  }
}
