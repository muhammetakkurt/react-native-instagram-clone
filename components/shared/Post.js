import ReadMore from "@fawazahmed/react-native-read-more";
import React, { useCallback } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";
import { Bookmark, Comment, Dot, Heart, More, Share } from "../../assets/icons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localeData from "dayjs/plugin/localeData";
import localeTR from "dayjs/locale/tr";
import FitImage from "./FitImage";
import { setBottomSheet } from "../../store/actions/bottomSheet";
import { useDispatch } from "react-redux";

dayjs.extend(relativeTime);
dayjs.extend(localeData);
dayjs.locale(localeTR);

export default function Post({ post, avatar, username }) {
  const dispatch = useDispatch();
  const [text, onChangeText] = React.useState("");

  const handleMoreButtonClick = useCallback(() => {
    dispatch(setBottomSheet(true));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInformation}>
          <Image
            style={styles.avatar}
            source={{
              uri: avatar,
            }}
          />
          <Text style={styles.fullName}>{username}</Text>
        </View>
        <TouchableOpacity onPress={handleMoreButtonClick}>
          <More size={24} />
        </TouchableOpacity>
      </View>
      <Swiper
        paginationStyle={{ bottom: -30 }}
        style={styles.swiper}
        loop={false}
        height={"100%"}
        dotStyle={styles.swiperDot}
        activeDotStyle={styles.swiperActiveDot}
      >
        {post?.images ? (
          post?.images?.map((image, key) => (
            <FitImage key={key} image={image} />
          ))
        ) : (
          <FitImage image={post} />
        )}
      </Swiper>
      <View style={styles.actionsContainer}>
        <View style={styles.buttons}>
          <View style={styles.buttonsLeft}>
            <Heart size={24} style={styles.button} />
            <Comment size={24} style={styles.button} />
            <Share size={24} style={styles.button} />
          </View>
          <View style={styles.buttonsRight}>
            <Bookmark size={20} />
          </View>
        </View>

        <Text style={styles.likes}>
          <Text style={styles.textBold}>akkurt.dev</Text>
          {` `}
          <Text>ve</Text>
          {` `}
          <Text style={styles.textBold}>diğer kişiler</Text>
          {` `}
          <Text>beğendi</Text>
        </Text>

        <ReadMore
          numberOfLines={2}
          seeMoreStyle={{ color: "#999" }}
          seeLessStyle={{ color: "#999" }}
          seeMoreText="more"
          expandOnly={true}
          style={styles.description}
        >
          <>
            <Text style={styles.textBold}>{username}</Text>
            {` `}
            {post?.description}
          </>
        </ReadMore>

        {post?.comments > 0 && (
          <TouchableOpacity style={styles.viewAllCommentsButton}>
            <Text>{post.comments} yorumun tümünü gör</Text>
          </TouchableOpacity>
        )}

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.date}>
            {post?.date && dayjs(post?.date).fromNow()}
          </Text>
          <View style={styles.dot}>
            <Dot size={4} />
          </View>
          <Text style={styles.translation}>Çevirisine Bak</Text>
        </View>

        <View style={styles.comments}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://pbs.twimg.com/profile_images/1469263242644099072/fP9gXFrl_400x400.jpg",
            }}
          />
          <TextInput
            style={styles.addCommentInput}
            onChangeText={onChangeText}
            value={text}
            placeholder="Yorum ekle..."
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
  },
  userInformation: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginRight: 9,
  },
  fullName: {
    fontWeight: "500",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  swiper: {
    flexDirection: "row",
  },
  swiperDot: {
    backgroundColor: "#C4C4C4",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  swiperActiveDot: {
    backgroundColor: "#32B5FF",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  actionsContainer: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonsLeft: {
    flexDirection: "row",
  },
  buttonsRight: {
    flexDirection: "row",
  },
  button: {
    marginRight: 15,
  },
  likes: {
    marginTop: 10,
    flexDirection: "row",
  },
  textBold: { fontWeight: "bold" },
  comments: {
    marginTop: 10,
    flexDirection: "row",
  },
  description: {
    marginTop: 10,
  },
  addCommentInput: {
    flex: 1,
    height: 30,
    paddingLeft: 5,
  },
  viewAllCommentsButton: {
    opacity: 0.5,
    paddingVertical: 7,
  },
  date: {
    fontSize: 12,
    opacity: 0.5,
  },
  dot: {
    marginLeft: 5,
    width: 10,
    opacity: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  translation: {
    fontSize: 13,
    fontWeight: "600",
    marginLeft: 5,
  },
});
