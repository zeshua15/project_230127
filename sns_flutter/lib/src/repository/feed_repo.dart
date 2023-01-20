import 'dart:io';
import 'package:http/http.dart' as http;

final base = 'http://192.168.63.240:3000';

class FeedRepo {
  //파일 업로드

  upload(String path, String filename) async {
    var request = http.MultipartRequest("POST", Uri.parse("$base/file/upload"));
    request.files.add(http.MultipartFile(
      'file',
      File(path).readAsBytes().asStream(),
      File(path).lengthSync(),
      filename: filename,
    ));
    var res = await request.send();
    var response = await http.Response.fromStream(res);
    if (response.statusCode == 200) {
      return response.body;
    } else {
      return null;
    }
  }
}
