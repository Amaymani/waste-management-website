import React from "react";
import Navbar from "./Navbar";
import EntrySection from "./EntrySection";
import TimelineSection from "./TimelineSection";
import '../index.css';
import FeatureQuestionSection from "./FeatureQuestionSection";
import DownloadSection from "./DownloadSection";

function App() {
  return (
    <div>
      <Navbar />
      <EntrySection />
      <FeatureQuestionSection />
      <TimelineSection/>
      <DownloadSection/>
    </div>
  );
}
export default App;
