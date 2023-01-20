import 'package:flutter/material.dart';
import 'my_profile.dart';
import '../screen/feed/feed_show.dart';

class FeedItem extends StatelessWidget {
  const FeedItem({super.key});

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        Navigator.push(context, MaterialPageRoute(builder: (b) => FeedShow()));
      },
      child: Container(
        padding: const EdgeInsets.all(10),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const MyProfile(),
            const SizedBox(
              width: 10,
            ),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: const [
                      Text('홍길동',
                          style: TextStyle(
                              fontSize: 16, fontWeight: FontWeight.bold)),
                      SizedBox(width: 10),
                      Text(
                        '2023-01-19',
                        style: TextStyle(
                          fontSize: 12,
                          color: Colors.grey,
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(
                    height: 6,
                  ),
                  const Text(
                      "세종어제 훈민정음 나라의 말이 중국과 달라 문자와 서로 통하지 아니하므로 이런 까닭으로 어리석은 백성이 이르고자 할 바가 있어도  마침내 제 뜻을 능히 펴지 못하는 사람이 많노라. 내가 이를 위해 가엽게 여겨  새로 스물여덟 글자를 만드노니 사람마다 하여금 쉽게 익혀 날마다 쓰는 것이 편안케 하고자 할 따름이니라"),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
