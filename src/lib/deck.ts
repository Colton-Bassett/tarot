export interface Card {
	id: number;
	name: string;
	isUpright: boolean;
	description: {
		upright: string;
		reversed: string;
	};
	keywords: {
		upright: string[];
		reversed: string[];
	};
}

export const deck: Card[] = [
	{
		id: 1,
		name: 'Fool',
		isUpright: true,
		description: {
			upright: 'desc',
			reversed: 'desc'
		},
		keywords: {
			upright: ['New Beginnings', 'Adventure', 'Spontaneity'],
			reversed: ['Foolishness', 'Recklessness', 'Naivety']
		}
	},
	{
		id: 2,
		name: 'Magician',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Manifestation', 'Skill', 'Resourcefulness'],
			reversed: ['Trickery', 'Deception', 'Lack of Focus']
		}
	},
	{
		id: 3,
		name: 'H.Priestess',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Intuition', 'Mystery', 'Spiritual Insight'],
			reversed: ['Secrets', 'Blocked Intuition', 'Hidden Agendas']
		}
	},
	{
		id: 4,
		name: 'Empress',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Fertility', 'Nurturing', 'Abundance'],
			reversed: ['Neglect', 'Creative Block', 'Dependence']
		}
	},
	{
		id: 5,
		name: 'Emperor',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Authority', 'Stability', 'Leadership'],
			reversed: ['Tyranny', 'Inflexibility', 'Lack of Control']
		}
	},
	{
		id: 6,
		name: 'Hiero',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Wisdom', 'Tradition', 'Spiritual Guidance'],
			reversed: ['Dogma', 'Rigid Thinking', 'Lack of Insight']
		}
	},
	{
		id: 7,
		name: 'Lovers',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Partnership', 'Union', 'Choice'],
			reversed: ['Disharmony', 'Separation', 'Imbalance']
		}
	},
	{
		id: 8,
		name: 'Chariot',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Determination', 'Control', 'Victory'],
			reversed: ['Lack of Direction', 'Defeat', 'Uncontrolled Energy']
		}
	},
	{
		id: 9,
		name: 'Strength',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Courage', 'Inner Strength', 'Patience'],
			reversed: ['Weakness', 'Lack of Confidence', 'Self-Doubt']
		}
	},
	{
		id: 10,
		name: 'Hermit',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Solitude', 'Reflection', 'Guidance'],
			reversed: ['Isolation', 'Loneliness', 'Avoidance']
		}
	},
	{
		id: 11,
		name: 'Wheel.F',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Luck', 'Change', 'Cycles'],
			reversed: ['Resistance to Change', 'Bad Luck', 'Stagnation']
		}
	},
	{
		id: 12,
		name: 'Justice',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Fairness', 'Truth', 'Accountability'],
			reversed: ['Injustice', 'Dishonesty', 'Bias']
		}
	},
	{
		id: 13,
		name: 'Hanged.M',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Sacrifice', 'New Perspective', 'Release'],
			reversed: ['Stagnation', 'Resistance', 'Avoidance']
		}
	},
	{
		id: 14,
		name: 'Death',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Transformation', 'Endings', 'Rebirth'],
			reversed: ['Resistance to Change', 'Stagnation', 'Fear of Change']
		}
	},
	{
		id: 15,
		name: 'Temp.',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Balance', 'Moderation', 'Patience'],
			reversed: ['Imbalance', 'Excess', 'Impatience']
		}
	},
	{
		id: 16,
		name: 'Devil',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Addiction', 'Temptation', 'Materialism'],
			reversed: ['Release', 'Breaking Free', 'Liberation']
		}
	},
	{
		id: 17,
		name: 'Tower',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Disruption', 'Chaos', 'Revelation'],
			reversed: ['Avoidance', 'Fear of Change', 'Delayed Disaster']
		}
	},
	{
		id: 18,
		name: 'Star',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Hope', 'Healing', 'Inspiration'],
			reversed: ['Disillusionment', 'Lack of Faith', 'Hopelessness']
		}
	},
	{
		id: 19,
		name: 'Moon',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Illusion', 'Intuition', 'Secrets'],
			reversed: ['Clarity', 'Truth Revealed', 'Misinterpretation']
		}
	},
	{
		id: 20,
		name: 'Sun',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Joy', 'Success', 'Vitality'],
			reversed: ['Unhappiness', 'Delay', 'Lack of Clarity']
		}
	},
	{
		id: 21,
		name: 'Judg.',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Judgment', 'Revelation', 'Transformation'],
			reversed: ['Self-Doubt', 'Avoidance', 'Unforgiveness']
		}
	},
	{
		id: 22,
		name: 'World',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Completion', 'Wholeness', 'Achievement'],
			reversed: ['Incomplete', 'Delayed Success', 'Unfinished Business']
		}
	},

	{
		id: 23,
		name: 'Kn.Wands',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Leadership', 'Vision', 'Courage'],
			reversed: ['Impulsiveness', 'Tyranny', 'Lack of Control']
		}
	},
	{
		id: 24,
		name: 'K.Wands',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Confidence', 'Mastery', 'Entrepreneurship'],
			reversed: ['Arrogance', 'Insecurity', 'Lack of Direction']
		}
	},
	{
		id: 25,
		name: 'Q.Wands',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Creative Energy', 'Passion', 'Independence'],
			reversed: ['Jealousy', 'Self-Doubt', 'Lack of Confidence']
		}
	},
	{
		id: 26,
		name: 'Pg.Wands',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Inspiration', 'Exploration', 'Curiosity'],
			reversed: ['Lack of Focus', 'Recklessness', 'Stagnation']
		}
	},
	{
		id: 27,
		name: 'II.Wands',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Planning', 'Future Vision', 'Progress'],
			reversed: ['Indecision', 'Lack of Direction', 'Fear of Change']
		}
	},
	{
		id: 28,
		name: 'III.Wands',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Expansion', 'Growth', 'Opportunity'],
			reversed: ['Delay', 'Lack of Progress', 'Limited Vision']
		}
	},
	{
		id: 29,
		name: 'IV.Wands',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Celebration', 'Stability', 'Community'],
			reversed: ['Disruption', 'Insecurity', 'Unfulfilled Expectations']
		}
	},
	{
		id: 30,
		name: 'V.Wands',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Competition', 'Struggle', 'Challenge'],
			reversed: ['Avoidance', 'Overwhelm', 'Unnecessary Conflict']
		}
	},
	{
		id: 31,
		name: 'VI.Wands',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Victory', 'Recognition', 'Success'],
			reversed: ['Defeat', 'Failure', 'Lack of Recognition']
		}
	},
	{
		id: 32,
		name: 'VII.Wands',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Perseverance', 'Defense', 'Standing Ground'],
			reversed: ['Weakness', 'Giving Up', 'Defeat']
		}
	},
	{
		id: 33,
		name: 'VIII.Wands',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Swift Action', 'Momentum', 'Quick Decisions'],
			reversed: ['Delays', 'Hindrance', 'Lack of Progress']
		}
	},
	{
		id: 34,
		name: 'IX.Wands',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Resilience', 'Persistence', 'Defensiveness'],
			reversed: ['Exhaustion', 'Burnout', 'Giving Up']
		}
	},
	{
		id: 35,
		name: 'X.Wands',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Burden', 'Responsibility', 'Overwhelm'],
			reversed: ['Release', 'Lighter Burden', 'End of a Difficult Cycle']
		}
	},
	{
		id: 36,
		name: 'A.Wands',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['New Beginnings', 'Creative Spark', 'Action'],
			reversed: ['Delay', 'Lack of Progress', 'Blocked Energy']
		}
	},

	{
		id: 37,
		name: 'Kn.Cups',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Compassion', 'Emotional Control', 'Diplomacy'],
			reversed: ['Emotional Manipulation', 'Coldness', 'Indifference']
		}
	},
	{
		id: 38,
		name: 'K.Cups',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Emotional Balance', 'Maturity', 'Wisdom'],
			reversed: ['Emotional Instability', 'Manipulation', 'Lack of Control']
		}
	},
	{
		id: 39,
		name: 'Q.Cups',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Empathy', 'Nurturing', 'Sensitivity'],
			reversed: ['Self-Centeredness', 'Moodiness', 'Emotional Unavailability']
		}
	},
	{
		id: 40,
		name: 'Pg.Cups',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Romance', 'Idealism', 'Creative Inspiration'],
			reversed: ['Emotional Immaturity', 'Recklessness', 'Unrealistic Expectations']
		}
	},
	{
		id: 41,
		name: 'II.Cups',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Love', 'Partnership', 'Harmony'],
			reversed: ['Disharmony', 'Separation', 'Breakups']
		}
	},
	{
		id: 42,
		name: 'III.Cups',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Celebration', 'Friendship', 'Community'],
			reversed: ['Exclusion', 'Isolation', 'Disconnection']
		}
	},
	{
		id: 43,
		name: 'IV.Cups',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Contemplation', 'Apathy', 'Reevaluation'],
			reversed: ['Discontentment', 'Missed Opportunities', 'Stagnation']
		}
	},
	{
		id: 44,
		name: 'V.Cups',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Regret', 'Loss', 'Emotional Grief'],
			reversed: ['Acceptance', 'Moving On', 'Healing']
		}
	},
	{
		id: 45,
		name: 'VI.Cups',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Nostalgia', 'Innocence', 'Reunion'],
			reversed: ['Living in the Past', 'Unresolved Issues', 'Missed Reconciliation']
		}
	},
	{
		id: 46,
		name: 'VII.Cups',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Choices', 'Illusions', 'Fantasy'],
			reversed: ['Clarity', 'Reality Check', 'Making Decisions']
		}
	},
	{
		id: 47,
		name: 'VIII.Cups',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Emotional Withdrawal', 'Leaving the Past Behind', 'Pursuit of Meaning'],
			reversed: ['Regret', 'Returning to the Past', 'Stagnation']
		}
	},
	{
		id: 48,
		name: 'IX.Cups',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Contentment', 'Wish Fulfillment', 'Gratitude'],
			reversed: ['Unfulfilled Desires', 'Discontentment', 'Unrealistic Expectations']
		}
	},
	{
		id: 49,
		name: 'X.Cups',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Emotional Fulfillment', 'Happiness', 'Harmony'],
			reversed: ['Emotional Drain', 'Unhappiness', 'Unstable Relationships']
		}
	},
	{
		id: 50,
		name: 'A.Cups',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['New Emotional Beginnings', 'Love', 'Creativity'],
			reversed: ['Emotional Blockages', 'Unrealistic Love', 'Repressed Feelings']
		}
	},
	{
		id: 51,
		name: 'Kn.Swords',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Intellect', 'Strategy', 'Authority'],
			reversed: ['Tyranny', 'Manipulation', 'Cruelty']
		}
	},
	{
		id: 52,
		name: 'K.Swords',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Clear Thinking', 'Truth', 'Mental Clarity'],
			reversed: ['Coldness', 'Overthinking', 'Miscommunication']
		}
	},
	{
		id: 53,
		name: 'Q.Swords',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Perceptive', 'Independent', 'Honesty'],
			reversed: ['Bitterness', 'Harsh Words', 'Isolation']
		}
	},
	{
		id: 54,
		name: 'Pg.Swords',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Curiosity', 'New Ideas', 'Mental Energy'],
			reversed: ['Naivety', 'Rash Decisions', 'Impatience']
		}
	},
	{
		id: 55,
		name: 'II.Swords',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Indecision', 'Balance', 'Choice'],
			reversed: ['Avoidance', 'Unresolved Conflict', 'Mental Block']
		}
	},
	{
		id: 56,
		name: 'III.Swords',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Heartbreak', 'Separation', 'Sorrow'],
			reversed: ['Healing', 'Forgiveness', 'Recovery']
		}
	},
	{
		id: 57,
		name: 'IV.Swords',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Rest', 'Contemplation', 'Recovery'],
			reversed: ['Burnout', 'Restlessness', 'Mental Exhaustion']
		}
	},
	{
		id: 58,
		name: 'V.Swords',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Defeat', 'Loss', 'Regret'],
			reversed: ['Regaining Control', 'Forgiveness', 'Resolution']
		}
	},
	{
		id: 59,
		name: 'VI.Swords',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Transition', 'Moving On', 'Healing'],
			reversed: ['Stagnation', 'Resisting Change', 'Escaping Reality']
		}
	},
	{
		id: 60,
		name: 'VII.Swords',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Deception', 'Strategy', 'Avoidance'],
			reversed: ['Self-Deception', 'Revelations', 'Confession']
		}
	},
	{
		id: 61,
		name: 'VIII.Swords',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Restriction', 'Limitation', 'Feeling Trapped'],
			reversed: ['Freedom', 'Release', 'Mental Clarity']
		}
	},
	{
		id: 62,
		name: 'IX.Swords',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Anxiety', 'Regret', 'Sleepless Nights'],
			reversed: ['Relief', 'Overcoming Fear', 'Hope']
		}
	},
	{
		id: 63,
		name: 'X.Swords',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Betrayal', 'Pain', 'Endings'],
			reversed: ['Recovery', 'Rebirth', 'Hope After Trauma']
		}
	},
	{
		id: 64,
		name: 'A.Swords',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Clarity', 'Truth', 'New Ideas'],
			reversed: ['Confusion', 'Deception', 'Mental Blocks']
		}
	},

	{
		id: 65,
		name: 'Kn.Pents',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Wealth', 'Stability', 'Security'],
			reversed: ['Greed', 'Financial Insecurity', 'Lack of Progress']
		}
	},
	{
		id: 66,
		name: 'K.Pents',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Maturity', 'Business Acumen', 'Practicality'],
			reversed: ['Stubbornness', 'Materialism', 'Overly Cautious']
		}
	},
	{
		id: 67,
		name: 'Q.Pents',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Nurturing', 'Security', 'Resourcefulness'],
			reversed: ['Selfishness', 'Indulgence', 'Imbalance']
		}
	},
	{
		id: 68,
		name: 'Pg.Pents',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Studious', 'Ambitious', 'Diligence'],
			reversed: ['Inexperience', 'Lack of Focus', 'Unrealistic Goals']
		}
	},
	{
		id: 69,
		name: 'II.Pents',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Balance', 'Adaptability', 'Change'],
			reversed: ['Imbalance', 'Instability', 'Juggling Too Much']
		}
	},
	{
		id: 70,
		name: 'III.Pents',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Collaboration', 'Skill Mastery', 'Teamwork'],
			reversed: ['Lack of Recognition', 'Poor Teamwork', 'Underperformance']
		}
	},
	{
		id: 71,
		name: 'IV.Pents',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Security', 'Stability', 'Possession'],
			reversed: ['Greed', 'Stagnation', 'Fear of Loss']
		}
	},
	{
		id: 72,
		name: 'V.Pents',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Material Loss', 'Struggle', 'Poverty'],
			reversed: ['Recovery', 'Regaining What Was Lost', 'New Opportunities']
		}
	},
	{
		id: 73,
		name: 'VI.Pents',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Generosity', 'Charity', 'Balance'],
			reversed: ['Debt', 'Imbalance', 'One-Sided Giving']
		}
	},
	{
		id: 74,
		name: 'VII.Pents',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Patience', 'Long-Term Investment', 'Assessment'],
			reversed: ['Impatience', 'Lack of Progress', 'Poor Returns']
		}
	},
	{
		id: 75,
		name: 'VIII.Pents',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Skill', 'Craftsmanship', 'Dedication'],
			reversed: ['Lack of Progress', 'Poor Effort', 'Boredom']
		}
	},
	{
		id: 76,
		name: 'IX.Pents',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Wealth', 'Self-Sufficiency', 'Luxury'],
			reversed: ['Materialism', 'Loneliness', 'Overindulgence']
		}
	},
	{
		id: 77,
		name: 'X.Pents',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['Legacy', 'Family', 'Generational Wealth'],
			reversed: ['Loss of Family Support', 'Financial Instability', 'Family Disputes']
		}
	},
	{
		id: 78,
		name: 'A.Pents',
		isUpright: true,
		description: { upright: 'desc', reversed: 'desc' },
		keywords: {
			upright: ['New Beginnings', 'Wealth', 'Manifestation'],
			reversed: ['Missed Opportunities', 'Lack of Focus', 'Wasted Potential']
		}
	}
];
