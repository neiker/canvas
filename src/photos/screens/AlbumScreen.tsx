import React from "react";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { Image, useWindowDimensions } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { PhotosStackProps } from "../types";

const NUM_COLUMNS = 3;

interface AlbumScreenProps {
  route: RouteProp<PhotosStackProps, "Album">;
  navigation: NavigationProp<PhotosStackProps, "Album">;
}

export function AlbumScreen({ route, navigation }: AlbumScreenProps) {
  const insets = useSafeAreaInsets();
  const windowDimensions = useWindowDimensions();
  const imageSize = windowDimensions.width / NUM_COLUMNS;

  return (
    <FlatList
      numColumns={NUM_COLUMNS}
      contentContainerStyle={{
        paddingBottom: insets.bottom,
      }}
      data={route.params.album.photos}
      keyExtractor={(photo) => `${photo.id}`}
      renderItem={({ item: photo }) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Photo", { photo });
          }}
        >
          <Image
            style={{
              width: imageSize,
              height: imageSize,
            }}
            source={{ uri: photo.url }}
          />
        </TouchableOpacity>
      )}
    />
  );
}
