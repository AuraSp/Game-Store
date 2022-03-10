import React from 'react';
import data from '../Data/Topics.json';
import Footer from './Footer';
import { useState } from 'react';

export default function TopicsList() {
    const [topics, setTopics] = useState(data);

    function changeStatus(id) {
        const updateTopics = [...topics];
        updateTopics.forEach((topic) => {
            if (topic.id == id) {
                topic.status = true;
            }
        });
        setTopics(updateTopics);
    }

    const topicsList = topics.map((topic) => {
        return (
            <Footer
            id = {topic.id}
            icon = {topic.icon}
            status = {topic.status}
            changeStatus = {changeStatus}
            />
        );
    });

  return (
    <>{topicsList}</>
  )
}
