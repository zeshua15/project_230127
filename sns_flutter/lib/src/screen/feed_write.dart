import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:sns_flutter/src/repository/user_repo.dart';

import '../repository/feed_repo.dart';

class FeedCreate extends StatefulWidget {
  const FeedCreate({super.key});

  @override
  State<FeedCreate> createState() => _FeedCreateState();
}

class _FeedCreateState extends State<FeedCreate> {
  final textController = TextEditingController();
  var snackBar = SnackBar(content: Text('글은 비워둘 수 없습니다'));
  final ImagePicker _picker = ImagePicker();
  final feedRepo = FeedRepo();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('피드작성'),
        actions: [
          IconButton(
              onPressed: () {
                String text = textController.text;
                if (text.isEmpty) {
                  ScaffoldMessenger.of(context).showSnackBar(snackBar);
                } else {
                  ///실제 글쓰기 rest 통신
                }
              },
              icon: Icon(Icons.save)),
        ],
      ),
      body: Column(
        children: [
          Expanded(
            child: TextField(
              keyboardType: TextInputType.multiline,
              minLines: null,
              maxLines: null,
              expands: true,
              decoration: InputDecoration(contentPadding: EdgeInsets.all(20)),
            ),
          ),
          IconButton(
            icon: Icon(Icons.image),
            onPressed: () async {
              final file = await _picker.pickImage(source: ImageSource.gallery);
              print(file);
              String result = await feedRepo.upload(file!.path, file.name);
              Map json = jsonDecode(result);
              print(json);
            },
          )
        ],
      ),
    );
  }
}
