import React from "react";
import { StyleSheet, View } from "react-native";

import { Widget, WidgetComponent } from "./src/Widget";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
});

const defaultWidget: Widget[] = [
  {
    id: "1",
    x: 50,
    y: 50,
    width: 120,
    height: 120,
    properties: {
      color: "yellow",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  },
  {
    id: "2",
    x: 452,
    y: 11,
    width: 120,
    height: 120,
    properties: {
      color: "green",
      text:
        "Suspendisse eu scelerisque magna, vitae vestibulum ex. Phasellus ut aliquet sapien. ",
    },
  },
  {
    id: "3",
    x: 34,
    y: 431,
    width: 120,
    height: 120,
    properties: {
      color: "blue",
      text: "Cras aliquam est eget ex pulvinar, vitae egestas lacus sagittis. ",
    },
  },
  {
    id: "4",
    x: 105,
    y: 401,
    width: 180,
    height: 120,
    properties: {
      color: "red",
      text:
        "Cras facilisis justo ligula, at vulputate lorem ornare nec. Duis ac enim leo.",
    },
  },
];

const App: React.FC = () => {
  const [widgets, setWidgets] = React.useState<Widget[]>(defaultWidget);

  return (
    <View style={styles.container}>
      {widgets.map((widget) => (
        <WidgetComponent
          key={widget.id}
          widget={widget}
          onUpdate={(newWidget) => {
            return;
            // TODO ver que pasa acá
            setWidgets((current) =>
              current.map((w) => {
                return w.id === newWidget.id ? newWidget : w;
              })
            );
          }}
        />
      ))}
    </View>
  );
};

export default React.memo(App);
