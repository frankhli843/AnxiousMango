export type DashboardData = {
    thoughtRecords: ThoughtRecord[]
}

export type ThoughtRecord = {
    dateCreated: string, // valid date string
    dateModified: string,
    title: string,
    situation: string,
    moods: Mood[],
    automaticThoughts: AutomaticThought[]
}

type Mood = {
    description: string,
    percentage: number // this is 0 to 100
}

type AutomaticThought = {
    description: string,
    hotThought: HotThought
}

type HotThought = {
    for: string,
    against: string,
}

export const dashboardDemoData: DashboardData = {
    thoughtRecords: [
        {
            dateCreated: 'dateCreated',
            dateModified: 'dateModified',
            title: 'Thought Record 1',
            situation: 'Frank and Monica are programming',
            moods: [{
                description: "happy",
                percentage: 80
            }],
            automaticThoughts: [
                {
                    description: "Hungry",
                    hotThought: {
                        for: 'stomach growling',
                        against: 'too early'
                    }
                }
            ]

        },
        {
            dateCreated: 'dateCreated',
            dateModified: 'dateModified',
            title: 'Thought Record 2',
            situation: 'Frank and Monica are copying stuff',
            moods: [{
                description: "happy",
                percentage: 85
            }],
            automaticThoughts: [
                {
                    description: "Thirsty",
                    hotThought: {
                        for: 'feel dry',
                        against: 'water is so far away'
                    }
                }
            ]

        }
    ]}