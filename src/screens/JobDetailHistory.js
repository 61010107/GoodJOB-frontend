import React from "react";
import { View } from "react-native";
import JobDetail, { MyPositionComponent } from "../component/JobDetail";

const JobDetailHistory = () => {
  const position = "ช่างภาพ";
  const job = {
    position: ["ช่างภาพ", "สตาฟ"],
    posWage: [1000, 500],
    posReq: [3, 2],
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 11 }}>
        <JobDetail>
          <MyPositionComponent position={position} job={job} />
        </JobDetail>
      </View>
    </View>
  );
};

export default JobDetailHistory;