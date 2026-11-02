import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, TextInput, Platform } from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

interface SkillData {
    id: number;
    name: string;
}

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<SkillData[]>([]);

    function handleAddNewSkill() {
        const data = {
            id: new Date().getTime(),
            name: newSkill
        }

        setMySkills(oldState => [...oldState, data]);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Welcome, Thaiur
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Write your skill"
                placeholderTextColor="#555"
                onChangeText={setNewSkill}
            />

            <Button
                title="Add"
                onPress={handleAddNewSkill}
            />

            <Text style={[styles.title, { marginVertical: 30 }]}>
                My Skills
            </Text>

            {
                mySkills.map(skill => (
                    <SkillCard 
                        key={skill.id} 
                        skill={skill.name} 
                    />
                ))
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 20,
        paddingVertical: 50
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1f1e25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 20,
        borderRadius: 7
    }
});