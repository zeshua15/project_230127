import 'package:http/http.dart' as http;

class UserRepo {
  login(String name, String email, String password) async {
    var url = Uri.http('192.168.63.240:3000', 'api/user/register');
    var response = await http.post(url, body: {
      'name': name,
      'email': email,
      'password': password,
    });
    /*if (response.statusCode == 200) {
      return response.body;
    } else {
      return null;
    }*/
    if (response.statusCode == 200) {
      return response.body;
    } else {
      return null;
    }
  }
}
