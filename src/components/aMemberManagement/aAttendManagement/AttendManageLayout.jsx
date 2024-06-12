// src/components/AttendManagement/AttendManageLayout.jsx
import React from 'react';
import AttendSearchBar from './AttendSearchBar';
import AttendCard from './AttendCard';

const AttendManageLayout = () => {
  return (
    <div>
      <AttendSearchBar />
      <div className="attend-cards">
        {/* 예시로 3개의 출석 카드를 보여줍니다. 실제로는 데이터를 통해 동적으로 생성할 수 있습니다. */}
        <AttendCard name="회원1" status="출석" />
        <AttendCard name="회원2" status="결석" />
        <AttendCard name="회원3" status="지각" />
      </div>
    </div>
  );
};

export default AttendManageLayout;
