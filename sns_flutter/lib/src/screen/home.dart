import 'package:flutter/material.dart';
import 'package:sns_flutter/src/widget/feed_item.dart';
import 'feed_write.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('My SNS'),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          var createPage = MaterialPageRoute(builder: (c) => FeedCreate());
          Navigator.push(context, createPage);
        },
        child: Icon(Icons.create),
      ),
      body: ListView(
        children: [
          FeedItem(),
          FeedItem(),
          FeedItem(),
          FeedItem(),
          FeedItem(),
        ],
      ),
    );
  }
}
