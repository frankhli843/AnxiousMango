export type DashboardData = {
    thoughtRecords: ThoughtRecord[],
    MainTabModes?: string,
    selectedThoughtRecordID: number,
    pendingThoughtRecord?: ThoughtRecord
}

export type ThoughtRecord = {
    dateCreated: string, // valid date string
    dateModified: string,
    title: string,
    situationList: string[],
    moods: Mood[],
    automaticThoughts: AutomaticThought[],
    selectedAutoThoughtID?: string,
}

type Mood = {
    description: string,
    percentage: number // this is 0 to 100
}

export type AutomaticThought = {
    description: string,
    id: string,
    hotThought?: HotThought,
    // isFocused?: boolean // this automatic thought is selected by user
}

export type HotThought = {
    description: string,
    for: string[],
    against: string[],
    balancedThought: string[]
}

export const dashboardDemoData: DashboardData = {
    selectedThoughtRecordID: -1,
    thoughtRecords: [
        {  // Bob is a compulsive shopper when he feels stressed. This causes conflict with his wife
            // b/c it puts them into debt
            dateCreated: '12/20/2020',
            dateModified: '12/20/2020',
            title: "covid restrictions",
            situationList: ['Saw on Youtube Ontario government announces new covid restrictions', "sitting in room in bed alone"],
            moods: [
                { description: "unsafe", percentage: 100 },
                { description: "upset", percentage: 100 },
            ],
            automaticThoughts: [
                {
                    description: "Things will never change.",
                    hotThought: {
                        description: "Things will never change.",
                        for: ["my friends don't call me back", "I lost my job", "We will never go back to pre-COVID times"],
                        against: ["Pfizer and Moderna have covid vaccines", "Trump won't be president in 2021"],
                        balancedThought: ["There will be better days ahead", "Biden is now president", "there are more covid vaccines"]
                    },
                    id: 'abc1',
                },
                {
                    description: "This is hopeless.",
                    id: 'abc2'
                },
                {
                    description: "Life's not fair.",
                    id: 'abc3'
                },
                {
                    description: "It didn't used to be like this.",
                    id: 'abc4'
                }
            ]

        },
        {  // Bob is a compulsive shopper when he feels stressed. This causes conflict with his wife
            // b/c it puts them into debt
            dateCreated: '12/20/2020',
            dateModified: '12/20/2020',
            situationList: ['another example'],
            title: "another example",
            moods: [
                { description: "unsafe", percentage: 100 },
                { description: "upset", percentage: 100 },
            ],
            automaticThoughts: [
                {
                    description: "Things will never change.",
                    hotThought: {
                        description: "Things will never change.",
                        for: ["my friends don't call me back", "I lost my job", "We will never go back to pre-COVID times"],
                        against: ["Pfizer and Moderna have covid vaccines", "Trump won't be president in 2021"],
                        balancedThought: ["There will be better days ahead", "Biden is now president", "there are more covid vaccines"]
                    },
                    id: 'abc1'
                },
                {
                    description: "This is hopeless.",
                    id: 'abc2'
                },
                {
                    description: "Life's not fair.",
                    id: 'abc3'
                },
                {
                    description: "It didn't used to be like this.",
                    id: 'abc4'
                }
            ]

        },
    ]
}