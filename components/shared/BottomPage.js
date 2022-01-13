import React, { useCallback, useEffect, useMemo, useRef } from "react";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setBottomSheet } from "../../store/actions/bottomSheet";

export default function BottomPage() {
  const dispatch = useDispatch();
  const showBottomSheet = useSelector((state) => state.bottomSheet.value);
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["01%", "40%"], []);

  const handleSheetChanges = useCallback((index) => {
    if ([0, -1].includes(index)) {
      // if bottomSheetHide, dispatch it
      dispatch(setBottomSheet(false));
    }
  }, []);
  const handleSnapPress = useCallback((index) => {
    bottomSheetRef.current?.snapToIndex(index);
  }, []);

  useEffect(() => {
    if (showBottomSheet === true) {
      handleSnapPress(1);
    }
    return () => {};
  }, [showBottomSheet]);

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={0}
        appearsOnIndex={1}
        opacity={0.6}
      />
    ),
    []
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      onDismiss={() => {
        console.log("dismissed");
      }}
      backdropComponent={renderBackdrop}
      index={0}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
    >
      <View style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#efefef",
              color: "#000",
              height: 70,
              flex: 0.31,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <Text>Paylaş</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#efefef",
              color: "#000",
              height: 70,
              flex: 0.31,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <Text>Bağlantı</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#efefef",
              height: 70,
              flex: 0.31,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "#ff3450" }}>Şikayet Et</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#efefef",
              color: "#000",
              height: 50,
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <Text>Bu gönderiyi neden görüyorsun?</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#efefef",
              color: "#000",
              height: 40,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            }}
          >
            <Text>Gizle</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#efefef",
              color: "#000",
              height: 40,
              borderTopWidth: 1,
              borderTopColor: "#e5e5e5",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            }}
          >
            <Text>Takibi Bırak</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheet>
  );
}
