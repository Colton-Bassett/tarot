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
			upright:
				"The Fool upright signifies new beginnings, adventure, and a leap of faith. It's a card of spontaneity, encouraging you to take risks and trust the journey ahead, even if the path seems uncertain. Embrace the unknown with optimism and curiosity, free from fear or doubt. The Fool reminds you to let go of past baggage and approach life with a fresh, open heart. Now is the time to step into new experiences, trusting that the universe will guide you as you venture into uncharted territory. Be brave—there's growth and excitement awaiting you.",
			reversed:
				'The Fool reversed suggests hesitation, recklessness, or fear of the unknown. You may be feeling lost or uncertain, afraid to take risks or make a leap of faith. This card warns against rushing into new ventures without proper preparation or consideration. It could also indicate that you’re holding onto past baggage, preventing personal growth. To move forward, reflect on your fears and insecurities, and take the time to regain your confidence. The reversed Fool calls for a pause—be mindful of impulsive decisions and avoid letting doubt control your path. Trust that clarity will come with patience.'
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
		description: {
			upright:
				'The Magician upright is a powerful sign of manifestation and creative potential. You have all the tools, skills, and resources at your disposal to turn your ideas into reality. This card encourages confidence in your abilities and reminds you that now is the time to take action. It’s a moment of empowerment—your focus, determination, and clarity can lead to success. The Magician also speaks of transformation: by aligning your mind, body, and spirit, you can shape your destiny. Trust in your talents, be bold in your pursuits, and know that you have everything needed to make your vision come true.',
			reversed:
				"The Magician reversed signals a lack of focus, confidence, or resourcefulness. You may feel disconnected from your own power or uncertain about your ability to manifest your desires. This card suggests that you're not fully utilizing your skills or the resources around you, possibly due to self-doubt or a sense of being overwhelmed. There may be deception at play—either self-deception or dishonesty from others. The Magician reversed urges you to reconnect with your inner strength and regain clarity. Reflect on your goals, break down your challenges, and trust that you have the tools to succeed, but you must believe in them first."
		},
		keywords: {
			upright: ['Manifestation', 'Skill', 'Resourcefulness'],
			reversed: ['Trickery', 'Deception', 'Lack of Focus']
		}
	},
	{
		id: 3,
		name: 'H.Priestess',
		isUpright: true,
		description: {
			upright:
				'The High Priestess upright calls for a deep connection with your intuition and inner wisdom. She represents mystery, spiritual insight, and the power of the subconscious. This card invites you to trust your instincts and look beyond the surface of situations. Answers lie within, waiting for you to listen carefully. You may be entering a phase of heightened intuition or spiritual growth. The High Priestess also suggests patience—some truths may remain hidden for now, but they will reveal themselves when the time is right. Embrace introspection and trust the quiet whispers of your intuition; they are guiding you toward clarity and understanding.',
			reversed:
				'The High Priestess reversed signals a disconnect from your intuition or an inability to trust your inner voice. You may be ignoring your gut feelings or avoiding deep self-reflection, leading to confusion or misdirection. This card can also point to secrets, either ones you’re keeping from yourself or others withholding important information from you. There’s a sense of spiritual stagnation or imbalance, and you may feel out of touch with your deeper wisdom. To regain clarity, turn inward and embrace silence and solitude. Reconnect with your intuition through meditation, journaling, or quiet contemplation, allowing the truth to emerge when you’re ready to listen.'
		},
		keywords: {
			upright: ['Intuition', 'Mystery', 'Spiritual Insight'],
			reversed: ['Secrets', 'Blocked Intuition', 'Hidden Agendas']
		}
	},
	{
		id: 4,
		name: 'Empress',
		isUpright: true,
		description: {
			upright:
				"The Empress upright embodies abundance, creativity, and nurturing energy. She represents fertility, both in literal and metaphorical terms, suggesting a time of growth and manifestation. Whether in relationships, career, or personal projects, you're in a phase of fertile potential. The Empress encourages you to embrace your creativity and trust in the natural flow of life. She also signals a need for self-care and nurturing, whether it's caring for yourself or others. This card highlights the importance of balance—tend to your needs and allow abundance to flow naturally, knowing that what you give will return to you tenfold.",
			reversed:
				"The Empress reversed warns of neglect or imbalance in nurturing energy. You may be feeling disconnected from your creativity, overworked, or unable to fully embrace abundance. This card can indicate that you're neglecting your own needs or not prioritizing self-care, leading to burnout or emotional depletion. It might also point to creative blocks or difficulties in manifesting your desires. The Empress reversed asks you to reassess your priorities and care for yourself and your projects. Take a step back, nurture your body and spirit, and allow yourself to rest—only then will your creative potential and abundance begin to flow once again."
		},
		keywords: {
			upright: ['Fertility', 'Nurturing', 'Abundance'],
			reversed: ['Neglect', 'Creative Block', 'Dependence']
		}
	},
	{
		id: 5,
		name: 'Emperor',
		isUpright: true,
		description: {
			upright:
				"The Emperor upright symbolizes authority, structure, and leadership. This card represents someone in control, confident in their decisions, and capable of creating order from chaos. It reflects a time when discipline, responsibility, and clear boundaries are necessary to achieve success. The Emperor encourages you to embrace your inner leader, take charge of your circumstances, and make strategic, well-thought-out plans. If you're seeking stability or direction, this card assures you that structure and authority will guide you forward. Trust your abilities to create a solid foundation and stand firm in your decisions.",
			reversed:
				'The Emperor reversed points to misuse of power, rigidity, or an imbalance in authority. It suggests that you may be feeling out of control or struggling with boundaries, either overstepping them or failing to enforce them. This card can indicate an abuse of power, a domineering figure, or issues with authority. The Emperor reversed asks you to examine any unhealthy control dynamics in your life, whether you’re imposing too much order or resisting structure altogether. It’s a reminder to find balance—assert your leadership, but avoid being overly harsh or inflexible. Reassess your approach and restore harmony to your environment.'
		},
		keywords: {
			upright: ['Authority', 'Stability', 'Leadership'],
			reversed: ['Tyranny', 'Inflexibility', 'Lack of Control']
		}
	},
	{
		id: 6,
		name: 'Hiero',
		isUpright: true,
		description: {
			upright:
				'The Hierophant upright signifies tradition, spiritual wisdom, and established systems. This card represents conformity to established norms, learning from mentors, or seeking guidance from spiritual or religious teachings. It encourages you to honor traditions, follow the path of wisdom, and seek advice from those with more experience. The Hierophant also suggests that now is a time to embrace structure and routine, especially in areas related to your spiritual or intellectual growth. This card may urge you to be more open to formal teachings or institutions, reminding you that there is value in learning through structured systems and established knowledge.',
			reversed:
				'The Hierophant reversed suggests a rejection of tradition or an unconventional approach to spirituality. You may feel restricted by societal norms, institutions, or outdated belief systems, and are seeking a more personal or non-traditional path. This card signals a time for questioning established structures and forging your own way. The Hierophant reversed can also indicate resistance to guidance or advice, or feeling disconnected from your spiritual practice. It asks you to embrace your individuality and explore alternative perspectives, but be mindful of becoming too rebellious or disconnected from the wisdom that could still help you grow.'
		},
		keywords: {
			upright: ['Wisdom', 'Tradition', 'Spiritual Guidance'],
			reversed: ['Dogma', 'Rigid Thinking', 'Lack of Insight']
		}
	},
	{
		id: 7,
		name: 'Lovers',
		isUpright: true,
		description: {
			upright:
				"The Lovers upright represents deep connections, harmony, and meaningful choices. This card signifies a time of alignment, where love, relationships, or significant partnerships are in harmony. It suggests a strong, authentic bond with another person, whether romantic, familial, or platonic. The Lovers also represents the need to make an important decision, one that may impact your personal values or relationships. Trust your heart and intuition, as this card emphasizes emotional clarity and mutual respect. It's a reminder to foster open communication, unity, and shared goals in your relationships, and to choose love and authenticity over superficial connections.",
			reversed:
				"The Lovers reversed indicates disharmony, imbalance, or difficult choices in relationships. This card suggests miscommunication, disagreements, or a lack of alignment between partners. It may point to a relationship that's out of balance, either due to neglect, emotional distance, or a lack of trust. The Lovers reversed can also indicate inner conflict—perhaps you're struggling to make a significant decision or feeling torn between two choices. This card asks you to reflect on your values, assess your relationships, and seek clarity. If you're facing challenges, work on communication and understanding, and consider whether you’re being true to yourself in your connections."
		},
		keywords: {
			upright: ['Partnership', 'Union', 'Choice'],
			reversed: ['Disharmony', 'Separation', 'Imbalance']
		}
	},
	{
		id: 8,
		name: 'Chariot',
		isUpright: true,
		description: {
			upright:
				'The Chariot upright represents determination, willpower, and victorious progress. This card signals that you have the strength and focus to overcome obstacles and move forward with purpose. The Chariot encourages you to take control of your destiny, harness your inner drive, and stay committed to your goals. It suggests that success is within reach, but only through discipline, focus, and persistence. Victory is not handed to you—it requires hard work and determination. The Chariot also represents balance, as you must manage opposing forces in your life with confidence and composure. Stay focused, and you will triumph over any challenges in your path.',
			reversed:
				"The Chariot reversed signals a loss of control, inner conflict, or a lack of direction. You may be struggling to maintain focus or feeling pulled in different directions, making it hard to move forward. This card suggests you're encountering obstacles that may feel insurmountable, possibly due to a lack of discipline or conflicting goals. The Chariot reversed urges you to reassess your approach—are you fully committed to your path, or is doubt hindering your progress? It’s time to regain balance, reassert control, and unify your actions. Reflect on what’s causing the disconnect and take conscious steps to steer your life back on course."
		},
		keywords: {
			upright: ['Determination', 'Control', 'Victory'],
			reversed: ['Lack of Direction', 'Defeat', 'Uncontrolled Energy']
		}
	},
	{
		id: 9,
		name: 'Strength',
		isUpright: true,
		description: {
			upright:
				"Strength upright embodies courage, inner resilience, and self-mastery. This card encourages you to tap into your inner strength, not through force, but through patience, compassion, and understanding. You have the power to face challenges with grace and confidence, overcoming obstacles by remaining calm and steady. Strength also represents the courage to be vulnerable, to confront your fears, and to act from a place of love and empathy. It's a reminder that true power comes from within, and by trusting yourself and staying grounded, you can navigate even the toughest situations with ease and balance.",
			reversed:
				'Strength reversed suggests self-doubt, weakness, or a lack of control over emotions. You may be feeling overwhelmed, disconnected from your inner power, or struggling to maintain patience and composure. This card indicates that you might be relying on external forces or aggression rather than inner strength. The reversed Strength asks you to confront fears or insecurities that are holding you back. It’s a reminder to nurture your self-confidence and trust in your ability to handle difficult situations with grace. Reconnect with your inner courage, be patient with yourself, and find balance through compassion, not force.'
		},
		keywords: {
			upright: ['Courage', 'Inner Strength', 'Patience'],
			reversed: ['Weakness', 'Lack of Confidence', 'Self-Doubt']
		}
	},
	{
		id: 10,
		name: 'Hermit',
		isUpright: true,
		description: {
			upright:
				'The Hermit upright represents introspection, wisdom, and a journey of inner discovery. This card signals a time for solitude and reflection, urging you to withdraw from the noise of the outside world to seek clarity and understanding within. The Hermit is a guide, encouraging you to trust your inner wisdom and find your own path. It suggests that answers lie not in external sources but in the quiet, reflective space within you. This is a time for spiritual growth, self-awareness, and deep contemplation. Embrace solitude as an opportunity to reconnect with your true self and gain the insight needed for the next phase of your journey.',
			reversed:
				'The Hermit reversed suggests isolation, loneliness, or reluctance to seek inner guidance. You may be feeling disconnected from yourself or others, struggling to find direction or clarity. The Hermit reversed can indicate that you are avoiding introspection, either due to fear of what you might find or a desire to stay busy and distracted. This card asks you to step out of isolation and reconnect with your inner wisdom. It may also signal that you’ve been relying too heavily on external advice, and it’s time to listen to your own voice. Find balance by embracing reflection, without retreating too far from the world.'
		},
		keywords: {
			upright: ['Solitude', 'Reflection', 'Guidance'],
			reversed: ['Isolation', 'Loneliness', 'Avoidance']
		}
	},
	{
		id: 11,
		name: 'Wheel.F',
		isUpright: true,
		description: {
			upright:
				'Wheel of Fortune upright signifies cycles of change, fate, and the ebb and flow of life. This card signals that a significant shift is on the horizon, bringing opportunities for growth and transformation. The Wheel of Fortune reminds you that life is constantly in motion, and sometimes things align perfectly for you, pushing you toward success or a new chapter. This is a time to embrace the changes, even if they feel uncertain, as they can lead to positive outcomes. Trust in the flow of life, stay open to new possibilities, and know that your circumstances are shifting in your favor, guided by destiny.',
			reversed:
				'Wheel of Fortune reversed suggests a period of stagnation, bad luck, or resistance to change. You may feel stuck, as if external forces are working against you, or that things aren’t going as planned. This card warns against fighting the natural flow of events—trying to control the outcome can lead to frustration. The Wheel of Fortune reversed asks you to reflect on how you might be resisting necessary changes or clinging to outdated patterns. While challenging, this period can offer important lessons if you embrace it. Trust that even setbacks have purpose, and with patience, you’ll soon find the opportunity to turn things around.'
		},
		keywords: {
			upright: ['Luck', 'Change', 'Cycles'],
			reversed: ['Resistance to Change', 'Bad Luck', 'Stagnation']
		}
	},
	{
		id: 12,
		name: 'Justice',
		isUpright: true,
		description: {
			upright:
				'Justice upright represents fairness, truth, and balance. This card signals a time when the truth will prevail, and justice will be served, whether in legal matters, relationships, or personal situations. It urges you to take an honest, objective look at your actions and decisions, and to act with integrity. The Justice card calls for accountability and fairness in all your dealings, and assures you that things will unfold in a just and balanced way. It encourages you to trust in the process, knowing that right will be done. This is also a reminder that your actions have consequences, so be mindful of the choices you make.',
			reversed:
				'Justice reversed suggests imbalance, unfairness, or dishonesty. There may be a situation where the truth is being ignored, hidden, or distorted, leading to a lack of clarity or resolution. The Justice reversed card indicates a need to examine where you might be avoiding responsibility or acting unjustly. It could also point to unresolved legal matters or imbalances in relationships. This card asks you to confront any issues of fairness or integrity and make things right. Seek clarity, be honest with yourself, and correct any wrongs, as injustice will persist until it’s addressed. Trust that the scales of justice will eventually be balanced, but only through conscious effort.'
		},
		keywords: {
			upright: ['Fairness', 'Truth', 'Accountability'],
			reversed: ['Injustice', 'Dishonesty', 'Bias']
		}
	},
	{
		id: 13,
		name: 'Hanged.M',
		isUpright: true,
		description: {
			upright:
				'The Hanged Man upright represents suspension, surrender, and gaining a new perspective. This card suggests a time of pause, where you may need to let go of control and allow things to unfold in their own time. The Hanged Man asks you to release resistance and see situations from a different angle, often leading to profound insights and spiritual growth. It may feel uncomfortable or stagnant, but this period of waiting or suspension is necessary for your transformation. Trust that by surrendering to the present moment, you will emerge with a deeper understanding of yourself and the world around you.',
			reversed:
				"The Hanged Man reversed signals resistance, delayed progress, or a refusal to see things from a different perspective. You may be holding onto old beliefs, habits, or attachments, preventing growth and new insights. This card warns against stubbornness or fear of change—refusing to release control can lead to frustration or stagnation. The Hanged Man reversed urges you to reflect on what you're avoiding or clinging to and consider shifting your perspective. To move forward, embrace the lessons that come from surrendering control and seeing things from a new angle. Only then can you break free from the current standstill."
		},
		keywords: {
			upright: ['Sacrifice', 'New Perspective', 'Release'],
			reversed: ['Stagnation', 'Resistance', 'Avoidance']
		}
	},
	{
		id: 14,
		name: 'Death',
		isUpright: true,
		description: {
			upright:
				"Death upright symbolizes transformation, endings, and new beginnings. This card signifies that a significant phase of your life is coming to an end, but with it comes the opportunity for rebirth and renewal. It’s a reminder that change is inevitable, and while it may be uncomfortable, it is necessary for growth. Death calls you to release what no longer serves you—whether it's old habits, relationships, or mindsets—so you can make room for new possibilities. Embrace the process of letting go, knowing that this transformation will lead to a fresh start and a new chapter in your life. Trust the cycle of life and death.",
			reversed:
				'Death reversed suggests resistance to change, stagnation, or a fear of letting go. You may be holding onto the past or avoiding necessary endings, which is preventing growth and transformation. The Death card in reverse warns that clinging to old situations, whether out of comfort or fear, is preventing you from moving forward. This may result in feeling stuck or trapped in a cycle that no longer serves your highest good. To move forward, you must confront what needs to end—only by releasing the old can you make way for the new. Let go, and trust that change will bring you the renewal you need.'
		},
		keywords: {
			upright: ['Transformation', 'Endings', 'Rebirth'],
			reversed: ['Resistance to Change', 'Stagnation', 'Fear of Change']
		}
	},
	{
		id: 15,
		name: 'Temp.',
		isUpright: true,
		description: {
			upright:
				'Temperance upright represents balance, harmony, and moderation. This card encourages you to find equilibrium in your life by blending different aspects of yourself or your circumstances. It’s a reminder that patience, self-control, and a calm approach will lead to peace and fulfillment. Temperance asks you to avoid extremes and to seek a balanced middle ground in your decisions and actions. This is a time for healing, integration, and moderation—whether it’s in relationships, work, or personal habits. By being patient and thoughtful, you can create a harmonious flow in your life, where everything aligns naturally, and the tension of imbalance fades away.',
			reversed:
				"Temperance reversed suggests imbalance, excess, or a lack of harmony. You may be struggling to find equilibrium in some area of your life, whether it’s due to overindulgence, impatience, or difficulty in combining different parts of yourself. The reversed Temperance card warns against pushing things too hard or acting impulsively. There may be a tendency to act without considering the consequences, creating disharmony. This card asks you to reflect on where you're overextending or neglecting your inner balance. Take time to slow down, reassess your actions, and restore harmony. Focus on patience, moderation, and finding the right balance to bring peace back into your life."
		},
		keywords: {
			upright: ['Balance', 'Moderation', 'Patience'],
			reversed: ['Imbalance', 'Excess', 'Impatience']
		}
	},
	{
		id: 16,
		name: 'Devil',
		isUpright: true,
		description: {
			upright:
				"The Devil upright represents temptation, addiction, and being trapped in unhealthy patterns. This card signals a time when you may be feeling bound by materialism, fear, or negative influences that limit your freedom. The Devil encourages you to examine what is holding you back—whether it's an addiction, toxic relationship, or self-destructive behavior. While the chains may seem unbreakable, they are often an illusion, and you have the power to release yourself. The Devil calls for self-awareness and the courage to confront your inner demons. By breaking free from these chains, you can reclaim your power and take control of your life.",
			reversed:
				'The Devil reversed signals liberation, breaking free, and overcoming bondage. This card suggests that you’re beginning to free yourself from negative influences or self-imposed limitations. Whether it’s overcoming addiction, toxic patterns, or destructive behaviors, The Devil reversed indicates a shift toward greater personal empowerment and autonomy. You may have gained the insight needed to break free from unhealthy attachments, or you’re in the process of doing so. It’s a reminder that true freedom comes when you take responsibility for your choices and consciously release what no longer serves you. This is a time of healing, growth, and reclaiming your life’s direction.'
		},
		keywords: {
			upright: ['Addiction', 'Temptation', 'Materialism'],
			reversed: ['Release', 'Breaking Free', 'Liberation']
		}
	},
	{
		id: 17,
		name: 'Tower',
		isUpright: true,
		description: {
			upright:
				'The Tower upright represents sudden change, upheaval, and the breaking down of old structures. This card signals a dramatic shift—often unexpected—that shakes your foundation, whether it’s in your personal life, career, or beliefs. While the Tower can feel unsettling or destructive, it’s ultimately a clearing of the old to make way for the new. The destruction of what no longer serves you creates space for greater truth, clarity, and transformation. The Tower asks you to embrace the chaos and trust that, though painful, it’s necessary for growth and liberation. Change can be uncomfortable, but it can also lead to newfound freedom and authenticity.',
			reversed:
				'The Tower reversed suggests resistance to change, avoidance of crisis, or a delay in necessary upheaval. You may be avoiding or resisting a situation that’s calling for transformation, which could result in prolonged instability or hidden tensions. The Tower reversed indicates that the foundation is still shaky, but the external chaos may be internalized or postponed. It may be a time to confront the looming changes rather than delay or suppress them. While this card can indicate that disaster has been averted, it also calls for careful attention—denial of the need for change may lead to an even more profound collapse down the road.'
		},
		keywords: {
			upright: ['Disruption', 'Chaos', 'Revelation'],
			reversed: ['Avoidance', 'Fear of Change', 'Delayed Disaster']
		}
	},
	{
		id: 18,
		name: 'Star',
		isUpright: true,
		description: {
			upright:
				'The Star upright symbolizes hope, inspiration, and healing. This card brings a message of renewal, optimism, and spiritual guidance. It suggests that even in difficult times, there is light at the end of the tunnel. The Star invites you to embrace your true self and trust in the universe’s plan for you. It encourages you to keep your faith, as things are aligning in your favor. This is a time of rejuvenation and inner peace, where you can begin to heal and restore your energy. The Star reminds you that you are connected to something greater, and with hope and clarity, your dreams can manifest.',
			reversed:
				"The Star reversed suggests hopelessness, discouragement, or a loss of faith. You may be feeling disconnected from your dreams or struggling to see the path forward. This card signals a lack of clarity or doubt about your direction, and it may reflect a time when you're feeling spiritually drained or uninspired. The Star reversed asks you to reconnect with your inner light and rediscover your sense of purpose. It’s a reminder that even in moments of doubt, healing and hope are still available to you—take small steps to restore your faith, and you’ll eventually find your way back to clarity and inspiration."
		},
		keywords: {
			upright: ['Hope', 'Healing', 'Inspiration'],
			reversed: ['Disillusionment', 'Lack of Faith', 'Hopelessness']
		}
	},
	{
		id: 19,
		name: 'Moon',
		isUpright: true,
		description: {
			upright:
				'The Moon upright represents illusion, intuition, and the realm of the unconscious. This card suggests that things may not be as they seem and urges you to trust your intuition rather than rely on surface appearances. The Moon invites you to explore your deeper feelings, hidden fears, and subconscious desires. It may indicate a time of confusion or uncertainty, where the truth is obscured, and you’re being called to navigate through the fog. Listen to your instincts, but be cautious of deceit or self-deception. This is a period of introspection and spiritual insight, where the answers lie beneath the surface, waiting to be uncovered.',
			reversed:
				'The Moon reversed signals clarity emerging from confusion, but also warns of unresolved fears or hidden truths. You may be coming out of a period of uncertainty or emotional turbulence, gaining insight into what was previously hidden. The Moon reversed calls for self-awareness, asking you to confront any illusions, deceptions, or subconscious patterns that still linger. While the fog is lifting, it’s important to be cautious of jumping to conclusions too quickly. The reversed Moon encourages you to face your fears directly, as understanding what has been suppressed can bring emotional healing and a clearer sense of direction moving forward.'
		},
		keywords: {
			upright: ['Illusion', 'Intuition', 'Secrets'],
			reversed: ['Clarity', 'Truth Revealed', 'Misinterpretation']
		}
	},
	{
		id: 20,
		name: 'Sun',
		isUpright: true,
		description: {
			upright:
				'The Sun upright represents positivity, success, and clarity. This card brings a burst of energy, vitality, and joy, signaling a time when everything is aligning in your favor. The Sun illuminates the path ahead, offering clear direction and confidence. It’s a reminder that you are on the right track and that happiness, abundance, and growth are within reach. The Sun also signifies personal growth, self-acceptance, and a sense of freedom. Celebrate your achievements and embrace the optimism that surrounds you. The light of The Sun encourages you to share your warmth and positivity with others, knowing that it will radiate back to you.',
			reversed:
				'The Sun reversed suggests temporary setbacks, lack of clarity, or self-doubt. While the positive energy of The Sun may still be present, it may be obscured or delayed, leaving you feeling uncertain or uninspired. There could be external circumstances causing confusion or a dip in confidence, preventing you from fully enjoying the success or clarity that’s available. This card invites you to reflect on what might be blocking your inner light or joy. While the path is still there, you may need to adjust your perspective or remove doubts to let the full brightness of The Sun back into your life.'
		},
		keywords: {
			upright: ['Joy', 'Success', 'Vitality'],
			reversed: ['Unhappiness', 'Delay', 'Lack of Clarity']
		}
	},
	{
		id: 21,
		name: 'Judg.',
		isUpright: true,
		description: {
			upright:
				'Judgement upright signifies awakening, transformation, and self-reflection. This card calls for a moment of reckoning, urging you to evaluate your past actions and decisions to gain clarity on the present. It represents a time of inner calling, where you may feel compelled to embrace a new phase or purpose in life. Judgement encourages you to release any guilt or regret and to forgive yourself, as well as others. It’s a time to rise above, heed your higher calling, and align your actions with your true self. This is a powerful moment for personal growth and transformation, where you can step into a renewed sense of freedom and authenticity.',
			reversed:
				'Judgement reversed suggests resistance to change, self-doubt, or avoiding a necessary reckoning. You may be refusing to confront past mistakes, carry lingering guilt, or suppress the call for personal growth. This card indicates a fear of judgment or an inability to hear your inner calling, preventing you from making a significant life shift. Judgement reversed asks you to reflect on why you might be avoiding self-awareness or accountability. It’s a time to let go of the past and embrace your potential for change. To move forward, you must face the truth, release any burdens, and embrace a fresh start free from self-imposed limitations.'
		},
		keywords: {
			upright: ['Judgment', 'Revelation', 'Transformation'],
			reversed: ['Self-Doubt', 'Avoidance', 'Unforgiveness']
		}
	},
	{
		id: 22,
		name: 'World',
		isUpright: true,
		description: {
			upright:
				'The World upright represents completion, achievement, and the fulfillment of a cycle. This card signals that you have successfully reached a major milestone or accomplished a long-term goal. The World celebrates your growth, integration, and the harmonious culmination of your efforts. It’s a sign that everything is in alignment, and you are ready to step into the next phase of your journey. The World encourages you to embrace this moment of success, reflect on how far you’ve come, and acknowledge your accomplishments. It’s a reminder that you are capable of achieving your dreams, and the universe is congratulating you for your perseverance and dedication.',
			reversed:
				"The World reversed suggests unfinished business, incomplete cycles, or a sense of being stuck. This card indicates that there may be a lingering issue or unfulfilled goal that is preventing you from fully moving forward. The World reversed can point to a lack of closure, whether it's in a project, relationship, or personal growth. You may feel like something is missing or that you’re unable to achieve the level of success you desire. This card urges you to assess what’s holding you back, whether it’s self-doubt, unaddressed issues, or resistance to completion. Only by addressing these blocks can you step into a new chapter of growth."
		},
		keywords: {
			upright: ['Completion', 'Wholeness', 'Achievement'],
			reversed: ['Incomplete', 'Delayed Success', 'Unfinished Business']
		}
	},

	{
		id: 23,
		name: 'Kn.Wands',
		isUpright: true,
		description: {
			upright:
				'The Knight of Wands represents action, passion, and boldness. This card signifies a period of high energy, enthusiasm, and a desire for adventure. You are likely feeling motivated to take risks, chase new opportunities, and pursue your goals with confidence. The Knight of Wands encourages you to stay focused on your ambitions, as your enthusiasm can lead to success. However, be cautious not to rush headlong into situations without a solid plan. Your impulsiveness is a strength, but ensure it’s balanced with thoughtful decisions to avoid burnout.',
			reversed:
				'The Knight of Wands reversed suggests recklessness, impatience, or a lack of direction. You may be feeling scattered, impulsive, or prone to making hasty decisions without considering the consequences. This card warns against rushing into situations without proper preparation or abandoning projects halfway. The reversed Knight of Wands could also point to a lack of motivation or enthusiasm, leaving you feeling uninspired or stagnant. Reevaluate your plans and approach, and try to regain your focus and determination before moving forward.'
		},
		keywords: {
			upright: ['Leadership', 'Vision', 'Courage'],
			reversed: ['Impulsiveness', 'Tyranny', 'Lack of Control']
		}
	},
	{
		id: 24,
		name: 'K.Wands',
		isUpright: true,
		description: {
			upright:
				'The King of Wands embodies leadership, vision, and confidence. This card indicates a time when you are taking charge, using your creativity and entrepreneurial spirit to lead others toward a shared goal. You are driven, focused, and determined to make things happen. The King of Wands inspires you to take the reins of your life and make bold decisions with confidence. Trust your instincts, as you have the ability to see the bigger picture and turn your ideas into reality. Leadership is key, and your charisma and vision are guiding others toward success.',
			reversed:
				"The King of Wands reversed can represent arrogance, domineering behavior, or a lack of vision. You may be feeling disconnected from your creative passions or struggling to lead with integrity. This card warns against controlling others too forcefully or neglecting your responsibilities. It may also suggest a fear of failure or inability to follow through on plans. The King of Wands reversed urges you to reassess your leadership style and ensure you're leading with authenticity and patience, not just force. It’s time to regain your clarity and confidence to avoid misdirection."
		},
		keywords: {
			upright: ['Confidence', 'Mastery', 'Entrepreneurship'],
			reversed: ['Arrogance', 'Insecurity', 'Lack of Direction']
		}
	},
	{
		id: 25,
		name: 'Q.Wands',
		isUpright: true,
		description: {
			upright:
				'The Queen of Wands is a symbol of warmth, charisma, and creative confidence. This card signals a time when you are embracing your personal power, using your creativity to inspire and uplift others. You’re in touch with your intuition and feel empowered to take charge of your life. The Queen of Wands encourages you to act with confidence, trust in your abilities, and embrace your natural leadership. Your vibrant energy attracts positivity and opportunities, and you can use your influence to create growth, both personally and for those around you.',
			reversed:
				'The Queen of Wands reversed suggests insecurity, burnout, or feeling disconnected from your inner fire. You may be struggling with self-doubt or lack the confidence to step into your power. This card warns against being overly controlling or demanding, both with yourself and others. There may be a tendency to neglect your own needs while trying to please everyone around you. The Queen of Wands reversed calls for self-care, balance, and a return to your personal passions. Regaining your sense of self-worth and creative flow will help you regain your natural energy and confidence.'
		},
		keywords: {
			upright: ['Creative Energy', 'Passion', 'Independence'],
			reversed: ['Jealousy', 'Self-Doubt', 'Lack of Confidence']
		}
	},
	{
		id: 26,
		name: 'Pg.Wands',
		isUpright: true,
		description: {
			upright:
				'The Page of Wands represents enthusiasm, curiosity, and a fresh perspective. This card signals the beginning of a new journey, project, or phase in your life. You are filled with youthful energy and excitement, eager to explore new ideas and embrace new opportunities. The Page of Wands encourages you to take risks and follow your passion, trusting that the excitement will fuel your success. Stay open to learning, remain adaptable, and don’t be afraid to venture into the unknown. There’s a world of potential awaiting you—let your creativity and curiosity lead the way.',
			reversed:
				'The Page of Wands reversed can signal delays, setbacks, or lack of focus. You may feel uninspired or uncertain about your direction, unable to muster the enthusiasm to start a new venture. This card may indicate a fear of failure or a lack of confidence in pursuing your passions. It could also suggest that you’re easily distracted or not following through on ideas. The Page of Wands reversed calls you to refocus, regain your sense of adventure, and take action, even if it’s one small step at a time. It’s time to reignite your spark.'
		},
		keywords: {
			upright: ['Inspiration', 'Exploration', 'Curiosity'],
			reversed: ['Lack of Focus', 'Recklessness', 'Stagnation']
		}
	},
	{
		id: 27,
		name: 'II.Wands',
		isUpright: true,
		description: {
			upright:
				'The 2 of Wands represents planning, foresight, and stepping into new possibilities. This card suggests that you’re at a crossroads, contemplating future opportunities and considering how to expand your horizons. The 2 of Wands encourages you to take the first step toward your goals with confidence and ambition. You have the potential to manifest your dreams, but it requires bold action and a willingness to take calculated risks. Now is the time to focus on your long-term vision and commit to the path that will take you toward greater success and fulfillment.',
			reversed:
				'The 2 of Wands reversed signals indecision, hesitation, or a fear of moving forward. You may be unsure about which direction to take or feel hesitant to make a decision that will shape your future. This card suggests that you’re not fully embracing your potential or are being held back by doubt or external circumstances. The 2 of Wands reversed calls for action—it’s time to overcome your fears and take the next step, even if it’s uncomfortable. Trust that your path will become clearer once you commit to your goals.'
		},
		keywords: {
			upright: ['Planning', 'Future Vision', 'Progress'],
			reversed: ['Indecision', 'Lack of Direction', 'Fear of Change']
		}
	},
	{
		id: 28,
		name: 'III.Wands',
		isUpright: true,
		description: {
			upright:
				'The 3 of Wands represents expansion, progress, and waiting for your efforts to bear fruit. This card signals that you’ve put in the work and are now in a position to see the rewards of your efforts. It’s a time of optimism and looking ahead, as you wait for the next phase of your journey to unfold. The 3 of Wands encourages you to remain patient, trust the process, and continue pursuing your vision. New opportunities are on the horizon, and you are in alignment with your goals. Keep your focus and remain open to what’s coming next.',
			reversed:
				'The 3 of Wands reversed suggests delays, missed opportunities, or frustration in the process of achieving your goals. You may feel that progress is slow or that things aren’t unfolding as you’d hoped. This card can indicate that your plans are being delayed, or you’re facing obstacles in your path. The 3 of Wands reversed calls you to reassess your strategy and look for new ways to move forward. Don’t lose hope—sometimes setbacks are simply a sign that adjustments are needed to align with the greater plan.'
		},
		keywords: {
			upright: ['Expansion', 'Growth', 'Opportunity'],
			reversed: ['Delay', 'Lack of Progress', 'Limited Vision']
		}
	},
	{
		id: 29,
		name: 'IV.Wands',
		isUpright: true,
		description: {
			upright:
				'The 4 of Wands represents celebration, stability, and the successful completion of a project or phase. This card signals a time of joy, harmony, and achievement, often in the form of a celebration or milestone. Whether it’s a personal or professional achievement, the 4 of Wands invites you to celebrate how far you’ve come and enjoy the fruits of your labor. This is also a card of building a solid foundation, both in relationships and your life’s goals. Embrace this time of stability and connection, knowing that your hard work is paying off.',
			reversed:
				'The 4 of Wands reversed signals instability, lack of celebration, or delayed success. You may be feeling disconnected from your achievements or experiencing setbacks that prevent you from fully enjoying your accomplishments. This card can indicate issues with home, family, or relationships, or a feeling of being unsettled despite your progress. The 4 of Wands reversed calls for reflection—consider where things might be out of balance or where you’re not fully honoring your hard work. It’s time to address these areas to restore harmony and celebrate the stability you’ve created.'
		},
		keywords: {
			upright: ['Celebration', 'Stability', 'Community'],
			reversed: ['Disruption', 'Insecurity', 'Unfulfilled Expectations']
		}
	},
	{
		id: 30,
		name: 'V.Wands',
		isUpright: true,
		description: {
			upright:
				'The 5 of Wands represents conflict, competition, and challenges. This card signals that you may be facing tension or opposition, either internally or externally. It often indicates that there’s a struggle to be heard, a battle for resources, or competing ideas. While this may feel frustrating, the 5 of Wands also encourages growth through these challenges. It’s a reminder that conflict can lead to clarity, collaboration, and new solutions if approached with an open mind. This card invites you to stay grounded and use the energy of the challenge to push yourself forward, rather than getting caught in negativity.',
			reversed:
				'The 5 of Wands reversed suggests avoidance of conflict, tension, or the resolution of disputes. This card indicates that instead of addressing the challenges head-on, you may be suppressing or avoiding them, leading to stagnation. It could also point to a time when unnecessary competition is being ignored, or when disagreements are being swept under the rug. The 5 of Wands reversed asks you to confront the issues at hand rather than evade them. Resolve the conflict directly, and this will bring greater harmony, clarity, and forward movement. Avoidance only prolongs the tension.'
		},
		keywords: {
			upright: ['Competition', 'Struggle', 'Challenge'],
			reversed: ['Avoidance', 'Overwhelm', 'Unnecessary Conflict']
		}
	},
	{
		id: 31,
		name: 'VI.Wands',
		isUpright: true,
		description: {
			upright:
				'The 6 of Wands represents victory, recognition, and success. This card signals that your efforts are being acknowledged and celebrated. It’s a time of achievement, where you are receiving validation for your hard work, talents, and perseverance. The 6 of Wands encourages you to bask in the glory of your accomplishments and enjoy the attention or praise you’ve earned. This is a moment to take pride in your journey and celebrate your victories. Just remember, while success is sweet, it’s important to stay grounded and focused on your continued growth.',
			reversed:
				'The 6 of Wands reversed signals a lack of recognition, failure, or feelings of defeat. You may be experiencing a setback or struggling to gain the validation you desire, leading to feelings of discouragement. This card can suggest that despite your efforts, success feels elusive, or your achievements are not being acknowledged. The 6 of Wands reversed asks you to reassess your approach or perception of success. Sometimes, it’s not about external recognition but about finding internal satisfaction and confidence in your journey. Stay resilient and focused on your long-term goals.'
		},
		keywords: {
			upright: ['Victory', 'Recognition', 'Success'],
			reversed: ['Defeat', 'Failure', 'Lack of Recognition']
		}
	},
	{
		id: 32,
		name: 'VII.Wands',
		isUpright: true,
		description: {
			upright:
				'The 7 of Wands represents perseverance, defense, and standing your ground. This card signals a time when you may need to defend your position, ideas, or beliefs against external challenges or opposition. It encourages you to be resilient, assertive, and confident, even if you feel outnumbered or overwhelmed. The 7 of Wands reminds you that maintaining your stance is key to overcoming adversity. While it may be tiring, the ability to persist through difficulties will ultimately lead to success. Keep fighting for what you believe in, and remember, standing your ground can be a powerful source of strength.',
			reversed:
				"The 7 of Wands reversed suggests vulnerability, feeling overwhelmed, or giving up under pressure. You may feel as though you’re losing ground or are too exhausted to keep defending yourself against external forces. This card can indicate a time of self-doubt or fear of confrontation, where you might be backing down from a challenge. The 7 of Wands reversed calls for you to assess whether you're surrendering too easily or avoiding necessary conflicts. It’s important to regain your confidence and determination, even if it requires taking a step back to refocus and gather strength before continuing."
		},
		keywords: {
			upright: ['Perseverance', 'Defense', 'Standing Ground'],
			reversed: ['Weakness', 'Giving Up', 'Defeat']
		}
	},
	{
		id: 33,
		name: 'VIII.Wands',
		isUpright: true,
		description: {
			upright:
				'The 8 of Wands represents swift action, progress, and momentum. This card signals that things are moving quickly, and opportunities are coming in fast. You may be in a phase of rapid change or swift decision-making, where everything seems to be falling into place. The 8 of Wands encourages you to seize these moments of momentum and act decisively. It’s a time of quick communication, travel, or new developments. Stay focused and adaptable, as this period of rapid movement can bring exciting results and open new doors for you.',
			reversed:
				"The 8 of Wands reversed indicates delays, obstacles, or things not moving as quickly as expected. This card signals frustration due to halted progress or miscommunication. Plans may be stalling, or you're feeling bogged down by slow-moving situations. The 8 of Wands reversed urges you to reevaluate your actions or approach, as something may be blocking the flow of energy. It could also suggest a need to be more patient and allow things to unfold in their own time. Slowdowns aren’t always setbacks; sometimes they offer space for refinement before moving forward."
		},
		keywords: {
			upright: ['Swift Action', 'Momentum', 'Quick Decisions'],
			reversed: ['Delays', 'Hindrance', 'Lack of Progress']
		}
	},
	{
		id: 34,
		name: 'IX.Wands',
		isUpright: true,
		description: {
			upright:
				'The 9 of Wands represents resilience, endurance, and guarding what you’ve built. This card suggests you’re in a position where you’ve faced many challenges and are feeling battle-worn but determined to persevere. The 9 of Wands encourages you to hold your ground, even if you’re feeling exhausted or uncertain. While the end is in sight, there may still be obstacles to overcome. The card urges you to trust in your strength and resilience—rest when needed, but don’t give up now. Your ability to endure will ultimately lead to success.',
			reversed:
				'The 9 of Wands reversed suggests vulnerability, burnout, or a lack of boundaries. You may be feeling exhausted, emotionally drained, or on the brink of giving up. This card signals that you could be pushing yourself too hard or allowing others to take advantage of your energy. The 9 of Wands reversed asks you to assess where you may need to set firmer boundaries or take time for self-care. It’s important to rest and recharge before you can move forward effectively. Acknowledge your limits and take the time to restore your strength before continuing.'
		},
		keywords: {
			upright: ['Resilience', 'Persistence', 'Defensiveness'],
			reversed: ['Exhaustion', 'Burnout', 'Giving Up']
		}
	},
	{
		id: 35,
		name: 'X.Wands',
		isUpright: true,
		description: {
			upright:
				'The 10 of Wands represents burden, responsibility, and feeling overwhelmed. This card suggests that you are carrying a heavy load, perhaps due to obligations, projects, or others’ expectations. While you may be dedicated to fulfilling your responsibilities, the 10 of Wands indicates that you’ve reached a point of exhaustion or strain. It’s important to evaluate what can be delegated or released. The card encourages you to find balance and release unnecessary weight. Though hard work is admirable, carrying too much for too long can hinder your progress and well-being.',
			reversed:
				'The 10 of Wands reversed indicates release, relief, or the letting go of burdens. You may be in the process of offloading responsibilities, allowing yourself to take a breather, or freeing yourself from situations that have been weighing you down. This card invites you to assess where you’ve been overburdened and consider where you can ask for help or set healthier boundaries. The 10 of Wands reversed signifies a time to stop overextending yourself. Letting go of excessive obligations can bring relief and allow you to regain energy and focus for more important pursuits.'
		},
		keywords: {
			upright: ['Burden', 'Responsibility', 'Overwhelm'],
			reversed: ['Release', 'Lighter Burden', 'End of a Difficult Cycle']
		}
	},
	{
		id: 36,
		name: 'A.Wands',
		isUpright: true,
		description: {
			upright:
				'The Ace of Wands represents new beginnings, inspiration, and creative potential. This card signals the birth of an exciting new venture or project, filled with energy, enthusiasm, and possibilities. The Ace of Wands invites you to embrace new opportunities, ignite your passions, and take bold action toward your goals. This is a time of fresh starts and creative breakthroughs—seize the momentum and channel it into something meaningful. The universe is offering you a spark of inspiration, and it’s up to you to fuel the fire and watch it grow.',
			reversed:
				'The Ace of Wands reversed suggests delays, false starts, or lack of inspiration. You may be feeling blocked or unsure of how to begin a new project or opportunity, despite your desire to move forward. This card can indicate that your creative energy is being stifled, or there may be obstacles preventing you from fully embracing new beginnings. The Ace of Wands reversed calls you to reassess your approach or take a step back to reignite your passion. Sometimes the spark needs a little time and adjustment to catch fire—don’t give up on the potential of your ideas.'
		},
		keywords: {
			upright: ['New Beginnings', 'Creative Spark', 'Action'],
			reversed: ['Delay', 'Lack of Progress', 'Blocked Energy']
		}
	},

	{
		id: 37,
		name: 'Kn.Cups',
		isUpright: true,
		description: {
			upright:
				'The Knight of Cups represents charm, idealism, and emotional pursuit. This card signals a time when you are being driven by your emotions, guided by passion or love. The Knight of Cups is often seen as a romantic figure, offering inspiration and creativity. He encourages you to follow your heart and explore your inner world, embracing new emotional experiences. However, be cautious of following fantasies or unrealistic expectations. The Knight of Cups asks you to remain grounded while pursuing your dreams, balancing emotion with practicality.',
			reversed:
				'The Knight of Cups reversed suggests a loss of direction or emotional instability. This card may indicate that your emotional pursuits are becoming unrealistic, overly idealistic, or manipulative. You could be chasing after a fantasy, or there may be someone in your life whose intentions are not as pure as they appear. The Knight of Cups reversed asks you to assess whether your emotions are guiding you wisely or leading you astray. Take a step back to find clarity and avoid getting lost in illusions. Focus on grounding your emotional self and being honest about your desires.'
		},
		keywords: {
			upright: ['Compassion', 'Emotional Control', 'Diplomacy'],
			reversed: ['Emotional Manipulation', 'Coldness', 'Indifference']
		}
	},
	{
		id: 38,
		name: 'K.Cups',
		isUpright: true,
		description: {
			upright:
				'The King of Cups represents emotional maturity, balance, and compassion. He embodies a strong, calm, and wise energy, suggesting that you are in control of your emotions. The King of Cups asks you to approach situations with empathy, understanding, and a nurturing spirit. This card indicates that emotional intelligence and self-control are your strengths at this time. You have the ability to offer support to others, while also maintaining your own emotional well-being. The King of Cups encourages you to use your emotional wisdom to navigate challenges and maintain peace in difficult situations.',
			reversed:
				'The King of Cups reversed signals emotional imbalance, manipulation, or difficulty in expressing emotions. You may be suppressing your feelings, becoming detached, or allowing your emotions to cloud your judgment. This card can also indicate someone in your life who is emotionally unavailable or manipulative. The King of Cups reversed asks you to reflect on your emotional state and evaluate whether you are using emotional intelligence effectively. It may be time to address hidden feelings, seek therapy, or establish better emotional boundaries to regain control over your emotional life.'
		},
		keywords: {
			upright: ['Emotional Balance', 'Maturity', 'Wisdom'],
			reversed: ['Emotional Instability', 'Manipulation', 'Lack of Control']
		}
	},
	{
		id: 39,
		name: 'Q.Cups',
		isUpright: true,
		description: {
			upright:
				'The Queen of Cups represents empathy, intuition, and emotional nurturing. She is deeply in touch with her feelings and uses her intuition to guide her decisions. This card suggests that you may be in a phase where emotional sensitivity and care for others are your strengths. The Queen of Cups encourages you to trust your inner wisdom and offer emotional support to those around you. Your compassion and nurturing energy are invaluable right now, but don’t forget to care for yourself as well. Balance is key. The Queen of Cups invites you to listen to your intuition and honor your emotional needs.',
			reversed:
				"The Queen of Cups reversed indicates emotional burnout, over-sensitivity, or a lack of self-care. You may be overgiving, putting others' needs before your own, which could lead to feelings of exhaustion or resentment. Alternatively, you could be suppressing your emotions or ignoring your intuition. The Queen of Cups reversed asks you to reflect on your emotional boundaries and how well you nurture yourself. Make sure to take time for self-care, and be cautious of emotional manipulation. Regain your emotional equilibrium by trusting your inner voice and taking care of your own needs."
		},
		keywords: {
			upright: ['Empathy', 'Nurturing', 'Sensitivity'],
			reversed: ['Self-Centeredness', 'Moodiness', 'Emotional Unavailability']
		}
	},
	{
		id: 40,
		name: 'Pg.Cups',
		isUpright: true,
		description: {
			upright:
				'The Page of Cups represents creativity, curiosity, and emotional openness. This card signals a time when you may be receiving or embracing new emotional experiences, offering fresh perspectives on love and relationships. The Page of Cups invites you to open your heart, explore your creative side, and follow your intuitive guidance. It’s a card of emotional growth and youthful exploration. It can indicate a new romantic interest, artistic inspiration, or emotional healing. This is a time to explore and trust in the unexpected emotional messages or insights that come your way.',
			reversed:
				'The Page of Cups reversed suggests emotional immaturity, confusion, or blocked creativity. You may be feeling disconnected from your feelings or struggling to express your emotions clearly. This card could indicate emotional naivety or a tendency to idealize relationships, leading to disappointment. The Page of Cups reversed asks you to examine your emotional maturity and whether you’re suppressing feelings or ignoring your intuition. Be open to emotional growth, but don’t get lost in daydreams or fantasies. Take a grounded approach to love and creativity, and let go of unrealistic expectations.'
		},
		keywords: {
			upright: ['Romance', 'Idealism', 'Creative Inspiration'],
			reversed: ['Emotional Immaturity', 'Recklessness', 'Unrealistic Expectations']
		}
	},
	{
		id: 41,
		name: 'II.Cups',
		isUpright: true,
		description: {
			upright:
				'The 2 of Cups represents union, partnership, and harmony in relationships. This card signals the deepening of a bond with someone, whether romantic, platonic, or professional. It’s a time when mutual respect, trust, and emotional connection are emphasized. The 2 of Cups encourages you to embrace the beauty of this partnership, celebrating the emotional and spiritual alignment you share. It may indicate a period of reconciliation or the blossoming of a new connection. The 2 of Cups affirms that love, harmony, and balance are guiding forces in your relationships.',
			reversed:
				'The 2 of Cups reversed signals disharmony, imbalance, or disconnection in a relationship. There may be misunderstandings, emotional distance, or a lack of mutual respect. This card could indicate a time of separation or a need to reassess a partnership. The 2 of Cups reversed asks you to examine where communication or emotional connection may be lacking. It may be time to address unresolved issues or let go of relationships that no longer serve your highest good. To restore balance, honesty, and effort are needed on both sides.'
		},
		keywords: {
			upright: ['Love', 'Partnership', 'Harmony'],
			reversed: ['Disharmony', 'Separation', 'Breakups']
		}
	},
	{
		id: 42,
		name: 'III.Cups',
		isUpright: true,
		description: {
			upright:
				'The 3 of Cups represents celebration, friendship, and emotional fulfillment. This card signals a time of joyful gatherings, where connections with friends and loved ones are emphasized. The 3 of Cups invites you to celebrate your achievements, share in the happiness of those around you, and embrace the support of your community. It’s a card of social harmony, creative collaboration, and emotional abundance. You may be coming together with others to mark a special occasion or milestone. This is a time for fun, gratitude, and enjoying the positive energy of shared emotional experiences.',
			reversed:
				'The 3 of Cups reversed suggests isolation, disconnection, or social tensions. There may be misunderstandings or conflict within your social circle, leading to feelings of exclusion or loneliness. This card can indicate a need to reassess your relationships or social engagements, especially if there’s gossip, jealousy, or unspoken tension. The 3 of Cups reversed asks you to reflect on your emotional support system and whether it’s serving you positively. It’s time to focus on creating deeper, more meaningful connections or resolving any emotional rifts with friends or loved ones.'
		},
		keywords: {
			upright: ['Celebration', 'Friendship', 'Community'],
			reversed: ['Exclusion', 'Isolation', 'Disconnection']
		}
	},
	{
		id: 43,
		name: 'IV.Cups',
		isUpright: true,
		description: {
			upright:
				"The 4 of Cups represents introspection, contemplation, and emotional withdrawal. This card suggests that you may be feeling disconnected from your current emotional reality, perhaps dissatisfied with your situation or apathetic to new opportunities. The 4 of Cups encourages you to pause and reflect on your feelings, as there may be new emotional opportunities being offered that you’re not fully recognizing. It’s a time to assess what you truly desire, and whether your emotional needs are being met. This card calls for emotional reevaluation—be open to new perspectives, and don't close yourself off to potential growth.",
			reversed:
				"The 4 of Cups reversed signals emotional awakening or a shift in perspective. This card suggests that you are coming out of a period of emotional apathy or detachment. You may be ready to embrace new opportunities or engage with the world more fully, no longer closed off from the potential for change. The 4 of Cups reversed asks you to open your heart and mind to the possibilities around you. If you've been feeling stuck or uninspired, now is the time to rediscover what excites and motivates you emotionally."
		},
		keywords: {
			upright: ['Contemplation', 'Apathy', 'Reevaluation'],
			reversed: ['Discontentment', 'Missed Opportunities', 'Stagnation']
		}
	},
	{
		id: 44,
		name: 'V.Cups',
		isUpright: true,
		description: {
			upright:
				'The 5 of Cups represents loss, regret, and emotional disappointment. This card signals a time when you may be focused on what has been lost, overlooked, or gone wrong. It can indicate feelings of sadness or grieving over past events or relationships. While the 5 of Cups asks you to acknowledge your emotions, it also encourages you to shift your focus to what remains. There is still hope and possibility ahead, but you must release the past in order to see the potential for healing. The 5 of Cups reminds you that it’s okay to grieve, but it’s equally important to move forward.',
			reversed:
				'The 5 of Cups reversed signals healing, emotional recovery, and moving past regret. This card indicates that you are beginning to shift away from the emotional pain or loss of the past. It’s a time of emotional release, forgiveness, and letting go. You may be finding closure or recognizing the lessons learned from your struggles. The 5 of Cups reversed invites you to embrace new emotional beginnings, as the worst is behind you. This card encourages you to open up to emotional healing and to focus on what’s left—there is hope, and the future holds promise.'
		},
		keywords: {
			upright: ['Regret', 'Loss', 'Emotional Grief'],
			reversed: ['Acceptance', 'Moving On', 'Healing']
		}
	},
	{
		id: 45,
		name: 'VI.Cups',
		isUpright: true,
		description: {
			upright:
				'The 6 of Cups represents nostalgia, happy memories, and emotional reconnection. This card signals a time when you may be reflecting on the past, reminiscing about simpler or more joyful moments. It suggests a return to innocence, harmony, and emotional balance. The 6 of Cups often points to a reunion, childhood memories, or reconnecting with people from your past. This card invites you to embrace the positive emotions and lessons of the past, but without dwelling on them. It can also indicate a time to share love and kindness with others, whether through family or old friends.',
			reversed:
				'The 6 of Cups reversed indicates emotional stagnation, clinging to the past, or being unable to move on from past memories. This card may suggest that you are trapped in nostalgia or longing for something that no longer serves you. There could be an unwillingness to let go of old relationships, situations, or emotional patterns that hinder your growth. The 6 of Cups reversed encourages you to break free from the past’s grip and embrace the present. While memories can be comforting, it’s time to focus on the opportunities and relationships that are unfolding now.'
		},
		keywords: {
			upright: ['Nostalgia', 'Innocence', 'Reunion'],
			reversed: ['Living in the Past', 'Unresolved Issues', 'Missed Reconciliation']
		}
	},
	{
		id: 46,
		name: 'VII.Cups',
		isUpright: true,
		description: {
			upright:
				'The 7 of Cups represents choices, illusion, and wishful thinking. This card signals a time when you are presented with many options or desires, but not all of them are realistic or fulfilling. The 7 of Cups invites you to assess your choices carefully and avoid being overwhelmed by fantasies or unattainable dreams. There may be confusion or a tendency to get lost in daydreams, but clarity is needed to discern what truly matters to you. Focus on what aligns with your values and long-term goals. The 7 of Cups reminds you that not every opportunity is worth pursuing.',
			reversed:
				'The 7 of Cups reversed indicates clarity, focus, and making grounded decisions. This card suggests that you are beginning to cut through the illusions and distractions, gaining a clearer understanding of your choices. You may be learning to avoid unrealistic expectations and are now ready to make a practical decision. The 7 of Cups reversed asks you to hone in on your true desires and focus your energy on what truly resonates with you. Avoid overthinking or letting yourself get lost in fantasy; instead, trust in your ability to make sound, clear decisions.'
		},
		keywords: {
			upright: ['Choices', 'Illusions', 'Fantasy'],
			reversed: ['Clarity', 'Reality Check', 'Making Decisions']
		}
	},
	{
		id: 47,
		name: 'VIII.Cups',
		isUpright: true,
		description: {
			upright:
				'The 8 of Cups represents emotional withdrawal, leaving the past behind, and seeking deeper fulfillment. This card signals a time when you may feel that something in your life—whether a relationship, job, or belief system—no longer serves your emotional needs. The 8 of Cups encourages you to walk away from what is no longer fulfilling and seek a more meaningful path. While this can be a difficult decision, it’s ultimately a journey toward greater emotional growth. The card reminds you that walking away is not a failure but an act of self-preservation and courage.',
			reversed:
				'The 8 of Cups reversed signals emotional stagnation, fear of change, or unresolved feelings. You may be clinging to a situation, relationship, or belief out of comfort or fear of the unknown, even though it no longer fulfills you. This card urges you to acknowledge that avoiding emotional growth or staying in a bad situation will only lead to frustration. The 8 of Cups reversed calls for you to face your emotional truth and take the necessary steps toward healing, even if it’s uncomfortable. Change is challenging, but necessary for your well-being and happiness.'
		},
		keywords: {
			upright: ['Emotional Withdrawal', 'Leaving the Past Behind', 'Pursuit of Meaning'],
			reversed: ['Regret', 'Returning to the Past', 'Stagnation']
		}
	},
	{
		id: 48,
		name: 'IX.Cups',
		isUpright: true,
		description: {
			upright:
				'The 9 of Cups represents emotional contentment, satisfaction, and the fulfillment of desires. This card signals a time when you are feeling emotionally at peace, enjoying the fruits of your labor, and experiencing joy in your personal life. The 9 of Cups suggests that your wishes are being granted or are within reach. It’s a card of abundance, celebration, and gratitude for what you have achieved. The 9 of Cups encourages you to savor this time of emotional fulfillment and share your happiness with others. You’ve earned it, and this period of contentment brings balance and peace.',
			reversed:
				'The 9 of Cups reversed signals dissatisfaction, unfulfilled desires, or feeling emotionally empty despite outward success. You may be seeking happiness outside yourself or realizing that material or superficial gains do not bring true contentment. The 9 of Cups reversed asks you to evaluate what is truly missing in your emotional life. It may be time to focus on internal fulfillment rather than external achievements. This card calls for you to seek deeper emotional connections, self-acceptance, or reevaluation of your goals in order to achieve lasting satisfaction.'
		},
		keywords: {
			upright: ['Contentment', 'Wish Fulfillment', 'Gratitude'],
			reversed: ['Unfulfilled Desires', 'Discontentment', 'Unrealistic Expectations']
		}
	},
	{
		id: 49,
		name: 'X.Cups',
		isUpright: true,
		description: {
			upright:
				'The 10 of Cups represents emotional harmony, happiness, and fulfillment in relationships. This card signals a time when your personal relationships, whether with family, friends, or a partner, are experiencing joy, peace, and deep emotional satisfaction. The 10 of Cups is often seen as the ultimate card for emotional contentment, as it indicates a sense of completion and fulfillment. It encourages you to embrace the love and support you have, while also celebrating the emotional bonds that bring you joy. This card affirms that love, happiness, and emotional stability are within your reach.',
			reversed:
				'The 10 of Cups reversed suggests emotional disconnection, family tension, or unfulfilled dreams of happiness. You may be feeling disconnected from your loved ones, or there may be unresolved issues in your home or family life. This card can indicate a time when your emotional needs are not being met, or when you’re struggling to find happiness or peace in your relationships. The 10 of Cups reversed calls for reflection on where emotional fulfillment is lacking, and what steps you can take to heal or restore harmony in your personal life.'
		},
		keywords: {
			upright: ['Emotional Fulfillment', 'Happiness', 'Harmony'],
			reversed: ['Emotional Drain', 'Unhappiness', 'Unstable Relationships']
		}
	},
	{
		id: 50,
		name: 'A.Cups',
		isUpright: true,
		description: {
			upright:
				'The Ace of Cups represents new emotional beginnings, love, and creative inspiration. This card signals the potential for deep emotional fulfillment, whether through a new relationship, creative project, or spiritual awakening. The Ace of Cups invites you to open your heart to new possibilities and embrace the flow of love and compassion. It is a card of renewal, overflowing with positive emotional energy, and suggests that you are entering a phase of emotional growth. The Ace of Cups encourages you to trust your intuition and embrace the abundance of love and beauty available to you.',
			reversed:
				'The Ace of Cups reversed suggests emotional blockages, unexpressed feelings, or difficulty in receiving love. This card may indicate that you are suppressing your emotions, afraid to open your heart, or struggling to connect with your true feelings. The Ace of Cups reversed asks you to examine where you may be holding back emotionally and consider how to open yourself to deeper connections. It can also point to emotional healing that is needed before new love or creative endeavors can flourish. Take time for self-reflection and nurturing your emotional well-being before moving forward.'
		},
		keywords: {
			upright: ['New Emotional Beginnings', 'Love', 'Creativity'],
			reversed: ['Emotional Blockages', 'Unrealistic Love', 'Repressed Feelings']
		}
	},

	{
		id: 51,
		name: 'Kn.Swords',
		isUpright: true,
		description: {
			upright:
				"The Knight of Swords represents action, ambition, and mental clarity. This card signals a time of swift movement and decisiveness. You are likely driven by a strong desire to achieve your goals, and you're prepared to take bold actions to get there. The Knight of Swords is assertive, energetic, and fearless in pursuit of his ideals. However, this energy can also be hasty or reckless, leading to potential conflict if you're not careful. The card encourages you to balance your sharp mind with caution, ensuring that your actions align with your long-term vision.",
			reversed:
				'The Knight of Swords reversed indicates impatience, impulsiveness, or a lack of focus. You may be rushing toward a goal without fully considering the consequences, or you may be encountering resistance due to your aggressive approach. This card can also point to a tendency to overthink or become scattered, making it difficult to move forward. The Knight of Swords reversed asks you to slow down and rethink your strategy. Take the time to gather your thoughts, evaluate your priorities, and move forward with a more thoughtful and measured approach.'
		},
		keywords: {
			upright: ['Intellect', 'Strategy', 'Authority'],
			reversed: ['Tyranny', 'Manipulation', 'Cruelty']
		}
	},
	{
		id: 52,
		name: 'K.Swords',
		isUpright: true,
		description: {
			upright:
				'The King of Swords represents intellectual power, authority, and clear thinking. This card signals a time when logic, strategy, and wisdom are guiding forces in your life. The King of Swords is able to cut through confusion and make decisions based on facts and reason. He encourages you to think critically, communicate clearly, and approach challenges with a level-headed mindset. The King of Swords also suggests that you may be called upon to take a leadership role or provide guidance to others using your knowledge and discernment.',
			reversed:
				'The King of Swords reversed signals mental manipulation, dishonesty, or misuse of power. You may be dealing with someone who is using intellect in a deceptive or controlling way, or you could be struggling with clarity in your own thinking. This card warns against being overly critical or harsh in your judgments. The King of Swords reversed asks you to examine whether you’re using your intellect to manipulate situations or others, and to ensure that your decisions are guided by truth and fairness, rather than ego or hidden motives.'
		},
		keywords: {
			upright: ['Clear Thinking', 'Truth', 'Mental Clarity'],
			reversed: ['Coldness', 'Overthinking', 'Miscommunication']
		}
	},
	{
		id: 53,
		name: 'Q.Swords',
		isUpright: true,
		description: {
			upright:
				'The Queen of Swords represents independence, perception, and emotional clarity. This card signals a time when you need to rely on your intellect, discernment, and wisdom to navigate challenges. The Queen of Swords is someone who speaks her truth with honesty and clarity, cutting through any emotional fog to see things as they truly are. She encourages you to detach emotionally when necessary, allowing you to make clear decisions without being swayed by sentimentality. The Queen of Swords also asks you to embrace your inner strength and communicate with confidence and clarity.',
			reversed:
				"The Queen of Swords reversed signals emotional coldness, detachment, or a lack of clarity in communication. You may be feeling overly judgmental or harsh toward others, or you may be struggling to express yourself in an honest or open way. This card could indicate a period of isolation, or difficulty in seeing things clearly due to emotional bias or confusion. The Queen of Swords reversed asks you to be mindful of how you communicate and whether you're allowing negativity or emotional baggage to cloud your judgment. Reconnect with your inner wisdom and strive for clarity and honesty in your interactions."
		},
		keywords: {
			upright: ['Perceptive', 'Independent', 'Honesty'],
			reversed: ['Bitterness', 'Harsh Words', 'Isolation']
		}
	},
	{
		id: 54,
		name: 'Pg.Swords',
		isUpright: true,
		description: {
			upright:
				'The Page of Swords represents curiosity, communication, and new ideas. This card signals a time of mental exploration and a thirst for knowledge. You may be entering a phase of learning, whether through research, study, or uncovering new information. The Page of Swords encourages you to ask questions, remain open-minded, and embrace a sense of wonder as you explore the world around you. However, be cautious of being overly blunt or argumentative, as this energy can sometimes lead to misunderstandings. The Page of Swords invites you to approach situations with keen observation and a fresh perspective.',
			reversed:
				"The Page of Swords reversed suggests gossip, immaturity, or dishonesty in communication. This card warns against spreading rumors or engaging in petty arguments. You may be facing misunderstandings, miscommunication, or a lack of clarity in your relationships or pursuits. The Page of Swords reversed asks you to reflect on your communication style and whether you are speaking with integrity. Avoid jumping to conclusions or reacting impulsively—take time to gather all the facts before expressing yourself. It's also a reminder to avoid getting caught up in drama or negative energy."
		},
		keywords: {
			upright: ['Curiosity', 'New Ideas', 'Mental Energy'],
			reversed: ['Naivety', 'Rash Decisions', 'Impatience']
		}
	},
	{
		id: 55,
		name: 'II.Swords',
		isUpright: true,
		description: {
			upright:
				'The 2 of Swords represents indecision, conflict, and a need for clarity. This card signals a time when you are facing a difficult decision, and you may be feeling stuck or uncertain about the best course of action. The 2 of Swords suggests that you may be avoiding confrontation or trying to block out your emotions in order to make a rational decision. However, the longer you remain indecisive, the more tension may build. This card encourages you to look within, trust your intuition, and make a choice. While it may be uncomfortable, avoiding the decision will only lead to further confusion.',
			reversed:
				'The 2 of Swords reversed signals a breakthrough in communication or a resolution to a difficult decision. This card suggests that the mental block or indecision that was holding you back is starting to clear, and you’re gaining clarity on the situation. It may also indicate that you are now ready to confront uncomfortable truths or face a conflict that you were avoiding. The 2 of Swords reversed asks you to embrace this clarity and move forward, making decisions with confidence and a clear sense of purpose. It’s time to act, release the tension, and find resolution.'
		},
		keywords: {
			upright: ['Indecision', 'Balance', 'Choice'],
			reversed: ['Avoidance', 'Unresolved Conflict', 'Mental Block']
		}
	},
	{
		id: 56,
		name: 'III.Swords',
		isUpright: true,
		description: {
			upright:
				'The 3 of Swords represents heartbreak, sorrow, and emotional pain. This card signals a time when you may be experiencing emotional hurt, often caused by a betrayal, loss, or miscommunication. The 3 of Swords is a card of deep emotional grief, but it also indicates that healing is possible. This card encourages you to allow yourself to feel the pain, but also reminds you that you will emerge stronger and wiser. The 3 of Swords invites you to confront your pain, learn from it, and embrace the possibility of emotional healing and growth after the storm.',
			reversed:
				'The 3 of Swords reversed signals emotional recovery, forgiveness, or the release of past pain. This card suggests that you are healing from a past heartbreak or emotional wound, and it may be time to move on from the hurt that once held you back. The 3 of Swords reversed asks you to forgive yourself or others for past mistakes and to release any lingering grief. It’s a time to mend emotional wounds, let go of resentment, and open yourself to new emotional possibilities. While healing may take time, the card assures you that you are on the right path to recovery.'
		},
		keywords: {
			upright: ['Heartbreak', 'Separation', 'Sorrow'],
			reversed: ['Healing', 'Forgiveness', 'Recovery']
		}
	},
	{
		id: 57,
		name: 'IV.Swords',
		isUpright: true,
		description: {
			upright:
				'The 4 of Swords represents rest, recovery, and mental rejuvenation. This card signals a time when you may need to take a break from the stress of daily life, allowing yourself the time and space to recharge. The 4 of Swords encourages you to step back from any mental or emotional overload and focus on self-care. Whether it’s through meditation, sleep, or simply taking a pause, this card reminds you that rest is essential for your well-being. The 4 of Swords invites you to give yourself permission to rest and reflect before moving forward with renewed energy and focus.',
			reversed:
				'The 4 of Swords reversed indicates restlessness, burnout, or avoidance of necessary healing. You may be pushing yourself too hard, refusing to take the time you need to recover, or avoiding the inner work required for mental peace. This card warns against ignoring your need for rest or taking on too much at once. The 4 of Swords reversed encourages you to slow down and prioritize self-care, as continuing to push forward without a break will only lead to exhaustion or mental blockages. Take the time to rest and heal so that you can face challenges with renewed strength.'
		},
		keywords: {
			upright: ['Rest', 'Contemplation', 'Recovery'],
			reversed: ['Burnout', 'Restlessness', 'Mental Exhaustion']
		}
	},
	{
		id: 58,
		name: 'V.Swords',
		isUpright: true,
		description: {
			upright:
				"The 5 of Swords signifies conflict, competition, and mental tension. This card often indicates a situation where victory comes at a cost. You may feel like you're winning, but the damage caused by the conflict could be irreparable. The 5 of Swords challenges you to reflect on whether the battle is worth fighting or if it's better to walk away with your dignity intact. While it’s tempting to prove yourself, the true victory may lie in choosing peace and letting go of unnecessary battles. Be mindful of the toll that conflict can take on your mental and emotional well-being.",
			reversed:
				"The 5 of Swords reversed embodies reconciliation, resolution, and letting go of past grievances. It suggests that the tension or conflict you’ve been experiencing is beginning to dissipate, and a sense of peace may be restored. This card invites you to forgive, move past the mental strife, and focus on healing. While the situation may not be fully resolved, you're on the path to letting go of grudges and embracing understanding. The 5 of Swords reversed asks you to focus on building positive connections and releasing old baggage to foster healthier, more constructive relationships."
		},
		keywords: {
			upright: ['Defeat', 'Loss', 'Regret'],
			reversed: ['Regaining Control', 'Forgiveness', 'Resolution']
		}
	},
	{
		id: 59,
		name: 'VI.Swords',
		isUpright: true,
		description: {
			upright:
				"The 6 of Swords embodies transition, healing, and moving forward. It suggests that you're leaving behind a difficult or tumultuous period and are now on a journey toward calmer waters. While the path ahead may still hold challenges, you're mentally and emotionally equipped to handle them. This card signifies a time of recovery and growth, where you're distancing yourself from negative influences or past hardships. The 6 of Swords encourages you to embrace the process of moving on and trust that you're headed in the right direction.",
			reversed:
				'The 6 of Swords reversed represents stagnation, resistance to change, and unresolved issues. You may be clinging to the past, struggling to move on from difficult experiences, or avoiding the necessary healing process. This card suggests that you may need to let go of old mental patterns or toxic situations that are preventing you from finding peace. The 6 of Swords reversed warns against staying stuck in a cycle of negativity or denial, and encourages you to face the discomfort of change in order to fully heal and progress.'
		},
		keywords: {
			upright: ['Transition', 'Moving On', 'Healing'],
			reversed: ['Stagnation', 'Resisting Change', 'Escaping Reality']
		}
	},
	{
		id: 60,
		name: 'VII.Swords',
		isUpright: true,
		description: {
			upright:
				'The 7 of Swords signifies deception, stealth, and strategic thinking. It may suggest that you or someone else is being less than honest, hiding the truth, or avoiding confrontation. This card can indicate a need for caution, as there may be hidden motives or unspoken truths in a situation. While the 7 of Swords warns of trickery, it also suggests that you may need to be resourceful and think outside the box to overcome challenges. Be mindful of dishonesty, but also recognize that sometimes it’s necessary to be discreet in order to achieve your goals.',
			reversed:
				"The 7 of Swords reversed embodies truth, revelation, and accountability. If deception has been present, this card signals that the truth will soon come to light. Secrets are being uncovered, and the time for dishonesty is coming to an end. The 7 of Swords reversed encourages you to face the truth, even if it's uncomfortable. It’s also a reminder to be honest with yourself and others. This card invites you to release any fear of confrontation and embrace transparency and integrity in your actions and decisions."
		},
		keywords: {
			upright: ['Deception', 'Strategy', 'Avoidance'],
			reversed: ['Self-Deception', 'Revelations', 'Confession']
		}
	},
	{
		id: 61,
		name: 'VIII.Swords',
		isUpright: true,
		description: {
			upright:
				'The 8 of Swords represents restriction, mental entrapment, and feeling trapped in your own thoughts. This card signals a period of self-imposed limitations or fear. You may be feeling stuck in a situation, believing that you have no options or control. However, the 8 of Swords reminds you that these constraints are often an illusion. The way forward is through shifting your perspective and recognizing that you have the power to free yourself. This card encourages you to release mental blockages and take action, even if it feels daunting at first.',
			reversed:
				'The 8 of Swords reversed signifies release, liberation, and breaking free from mental imprisonment. It suggests that you are overcoming the fears and limiting beliefs that once held you back. This card invites you to take charge of your own fate, recognizing that the obstacles you faced were not as insurmountable as they seemed. The 8 of Swords reversed encourages you to step out of your comfort zone and take bold action, confident in your ability to free yourself from mental or emotional constraints.'
		},
		keywords: {
			upright: ['Restriction', 'Limitation', 'Feeling Trapped'],
			reversed: ['Freedom', 'Release', 'Mental Clarity']
		}
	},
	{
		id: 62,
		name: 'IX.Swords',
		isUpright: true,
		description: {
			upright:
				'The 9 of Swords embodies anxiety, fear, and mental anguish. This card often appears when you are overwhelmed by worry, regret, or guilt, typically related to a past situation. The 9 of Swords signals sleepless nights, constant rumination, and the feeling that your mind is consumed by negative thoughts. However, it also reminds you that much of the suffering you’re experiencing is exaggerated by your thoughts. The card encourages you to confront your fears, seek help if necessary, and remember that things are often not as bad as they seem in the darkness of the night.',
			reversed:
				"The 9 of Swords reversed signifies the end of a period of stress, anxiety, and mental turmoil. This card suggests that you're starting to release the negative thought patterns or feelings of dread that have been keeping you awake at night. It may also indicate that you're facing your fears head-on and beginning to heal. The 9 of Swords reversed encourages you to seek support if you're still struggling, and to allow yourself the space to process and move forward. Peace of mind is on the horizon, as you regain control over your thoughts and emotions."
		},
		keywords: {
			upright: ['Anxiety', 'Regret', 'Sleepless Nights'],
			reversed: ['Relief', 'Overcoming Fear', 'Hope']
		}
	},
	{
		id: 63,
		name: 'X.Swords',
		isUpright: true,
		description: {
			upright:
				'The 10 of Swords signifies betrayal, painful endings, and rock-bottom moments. This card often represents the culmination of a difficult experience, where you feel defeated or overwhelmed by external circumstances. It may indicate a time of deep emotional or mental pain, where you feel like everything has come crashing down. However, the 10 of Swords also marks the end of a cycle and the opportunity for a fresh start. It reminds you that while the situation may feel dire, new opportunities are waiting to arise once you’ve processed the pain and moved forward.',
			reversed:
				"The 10 of Swords reversed represents recovery, healing, and overcoming a traumatic experience. While the pain from a difficult situation may still linger, this card signals that you're beginning to heal and move beyond the trauma. The worst is over, and you’re slowly recovering from the emotional or mental burden that you’ve been carrying. The 10 of Swords reversed encourages you to take small steps toward rebuilding and finding closure. It’s a reminder that while endings can be painful, they also open the door to new beginnings and growth."
		},
		keywords: {
			upright: ['Betrayal', 'Pain', 'Endings'],
			reversed: ['Recovery', 'Rebirth', 'Hope After Trauma']
		}
	},
	{
		id: 64,
		name: 'A.Swords',
		isUpright: true,
		description: {
			upright:
				'The Ace of Swords signifies clarity, breakthroughs, and new ideas. This card represents the power of the mind, offering you a fresh perspective and the intellectual strength to cut through confusion. It marks a time when a new truth is revealed or when you gain mental clarity on an issue that has been puzzling you. The Ace of Swords embodies the energy of clear communication, sharp intellect, and the courage to take decisive action. It invites you to embrace new ways of thinking and to approach challenges with a focused and determined mindset.',
			reversed:
				'The Ace of Swords reversed represents confusion, miscommunication, and mental blocks. It suggests that you may be struggling to see things clearly or are having difficulty expressing your thoughts and ideas. This card warns against being clouded by illusions or being too hasty in your decision-making. The Ace of Swords reversed encourages you to take a step back, slow down, and clear the mental fog before moving forward. It’s important to ensure that your thoughts are clear and your communication is honest before making any significant decisions.'
		},
		keywords: {
			upright: ['Clarity', 'Truth', 'New Ideas'],
			reversed: ['Confusion', 'Deception', 'Mental Blocks']
		}
	},

	{
		id: 65,
		name: 'Kn.Pents',
		isUpright: true,
		description: {
			upright:
				'The Knight of Pentacles embodies hard work, dedication, and perseverance. This card signifies a methodical and disciplined approach to achieving your goals. You’re focused on the long-term and willing to put in the consistent effort required to build stability and success. The Knight of Pentacles encourages you to stay grounded, follow through on commitments, and take a steady, calculated approach. This energy is all about practicality and taking your time to do things right. The Knight reminds you that success comes from persistence, attention to detail, and a commitment to your values.',
			reversed:
				'The Knight of Pentacles reversed signifies stagnation, laziness, or a lack of motivation. This card suggests that you may be feeling uninspired or are putting in less effort than you should. Perhaps you are getting bogged down by the minutiae and losing sight of the bigger picture. The reversed Knight of Pentacles asks you to re-evaluate your commitment and dedication. Are you procrastinating, or are you stuck in a cycle of perfectionism that’s preventing progress? This card urges you to push through inertia, regain your focus, and get back to work with renewed determination.'
		},
		keywords: {
			upright: ['Wealth', 'Stability', 'Security'],
			reversed: ['Greed', 'Financial Insecurity', 'Lack of Progress']
		}
	},
	{
		id: 66,
		name: 'K.Pents',
		isUpright: true,
		description: {
			upright:
				'The King of Pentacles represents mastery over the material world, financial success, and security. He embodies stability, abundance, and practical wisdom. This card signifies the ability to create lasting prosperity through wise investments, hard work, and a steady approach to life. The King of Pentacles encourages you to take charge of your finances and resources, while also maintaining a sense of generosity and loyalty. He teaches that wealth is not just about money, but about creating a comfortable, stable life for yourself and your loved ones through responsibility and discipline.',
			reversed:
				'The King of Pentacles reversed signals financial instability, greed, or a lack of responsibility. This card may point to a tendency to be overly focused on material success at the expense of your personal values or relationships. The King of Pentacles reversed may also indicate an unhealthy obsession with wealth or an inability to manage your resources effectively. It encourages you to take a step back and assess whether your pursuits are truly serving you in a balanced way. This card warns against excess, and reminds you to regain control of your finances and priorities.'
		},
		keywords: {
			upright: ['Maturity', 'Business Acumen', 'Practicality'],
			reversed: ['Stubbornness', 'Materialism', 'Overly Cautious']
		}
	},
	{
		id: 67,
		name: 'Q.Pents',
		isUpright: true,
		description: {
			upright:
				'The Queen of Pentacles embodies nurturing energy, financial security, and practicality. She signifies a caring, grounded, and responsible approach to wealth and life. This card represents someone who is in tune with the material world, managing resources wisely while ensuring that their home and loved ones are cared for. The Queen of Pentacles encourages you to find a balance between work and personal life, focusing on creating harmony, security, and comfort. She reminds you that taking care of yourself and others is key to building a prosperous, stable life.',
			reversed:
				"The Queen of Pentacles reversed signifies neglect, imbalance, or overexertion. This card may indicate that you’re neglecting self-care or have become overly focused on material pursuits at the expense of your emotional or physical well-being. It can also suggest that you are struggling to create balance in your life, particularly between career, family, and personal time. The reversed Queen of Pentacles urges you to address any imbalances and reconnect with the nurturing aspects of yourself. It’s time to reassess priorities and ensure that you're taking care of both your inner and outer worlds."
		},
		keywords: {
			upright: ['Nurturing', 'Security', 'Resourcefulness'],
			reversed: ['Selfishness', 'Indulgence', 'Imbalance']
		}
	},
	{
		id: 68,
		name: 'Pg.Pents',
		isUpright: true,
		description: {
			upright:
				'The Page of Pentacles represents new opportunities, learning, and the beginning of a practical journey. This card signifies a period of growth, where you’re starting to focus on your future and the steps required to achieve your goals. The Page of Pentacles embodies a desire for knowledge, self-improvement, and the cultivation of new skills. It encourages you to stay grounded and patient as you work on building your financial and material foundation. The Page of Pentacles reminds you to embrace new opportunities and approach them with curiosity, determination, and a willingness to learn.',
			reversed:
				'The Page of Pentacles reversed suggests a lack of focus, procrastination, or missed opportunities. This card warns that you may be neglecting your goals or avoiding the hard work needed to bring them to fruition. The Page of Pentacles reversed can also indicate a lack of discipline or a failure to follow through on projects. It encourages you to stop delaying progress and take practical steps to move forward. Reflect on what is preventing you from taking action and work to overcome distractions or fears that are holding you back from achieving your potential.'
		},
		keywords: {
			upright: ['Studious', 'Ambitious', 'Diligence'],
			reversed: ['Inexperience', 'Lack of Focus', 'Unrealistic Goals']
		}
	},
	{
		id: 69,
		name: 'II.Pents',
		isUpright: true,
		description: {
			upright:
				'The 2 of Pentacles signifies balance, adaptability, and juggling multiple priorities. This card suggests that you are managing your resources well, but it may be a challenge to keep everything in harmony. You may be balancing work and personal life, finances, or responsibilities in a way that requires flexibility and constant adjustment. The 2 of Pentacles encourages you to stay focused, adaptable, and maintain your equilibrium even in the face of change. It reminds you that life is about constant ebb and flow, and you must adjust as needed to keep things moving forward.',
			reversed:
				"The 2 of Pentacles reversed represents imbalance, instability, and feeling overwhelmed. This card suggests that you may be struggling to manage your responsibilities or finances effectively. You could be feeling like you're dropping the ball or that things are spiraling out of control. The 2 of Pentacles reversed urges you to reassess your priorities and reorganize your life. It may be time to let go of some commitments or seek help in order to regain balance and stability. Take a step back, and be mindful of how you’re managing your energy and resources."
		},
		keywords: {
			upright: ['Balance', 'Adaptability', 'Change'],
			reversed: ['Imbalance', 'Instability', 'Juggling Too Much']
		}
	},
	{
		id: 70,
		name: 'III.Pents',
		isUpright: true,
		description: {
			upright:
				'The 3 of Pentacles represents collaboration, teamwork, and the mastery of a skill. This card suggests that you are working with others toward a common goal, and that your efforts are beginning to pay off. You may be gaining recognition for your skills or expertise, and there is a sense of satisfaction in seeing your hard work come to fruition. The 3 of Pentacles encourages you to continue honing your craft and working well with others. It also reminds you that success often comes through collaboration, building a solid foundation together with like-minded individuals.',
			reversed:
				'The 3 of Pentacles reversed signifies lack of teamwork, miscommunication, or a lack of recognition for your efforts. This card may indicate that you’re struggling to work with others effectively, or that your contributions are not being valued. There could be a sense of frustration, as your hard work is going unappreciated or unnoticed. The 3 of Pentacles reversed encourages you to reassess your approach to collaboration and communication. It’s time to address any conflicts, improve your ability to work with others, and ensure that you’re being recognized for your efforts.'
		},
		keywords: {
			upright: ['Collaboration', 'Skill Mastery', 'Teamwork'],
			reversed: ['Lack of Recognition', 'Poor Teamwork', 'Underperformance']
		}
	},
	{
		id: 71,
		name: 'IV.Pents',
		isUpright: true,
		description: {
			upright:
				"The 4 of Pentacles signifies stability, security, and the desire to hold on to what you’ve earned. This card represents a time of financial prudence and caution. You may be focused on building wealth, protecting your assets, and creating a secure foundation for the future. The 4 of Pentacles encourages you to be mindful of your resources, but it also warns against becoming too possessive or fearful of loss. This card reminds you that true security comes from knowing when to hold on and when to let go. Ensure that you're not limiting your growth out of fear or scarcity.",
			reversed:
				'The 4 of Pentacles reversed embodies letting go, releasing control, and breaking free from rigid financial or material attachments. This card suggests that you may be holding onto things too tightly, whether that’s money, possessions, or a sense of security. The reversed 4 of Pentacles encourages you to loosen your grip, embrace change, and trust that your wealth or security does not define your worth. It’s time to focus on growth and new opportunities, rather than staying in a state of stagnation or fear of loss.'
		},
		keywords: {
			upright: ['Security', 'Stability', 'Possession'],
			reversed: ['Greed', 'Stagnation', 'Fear of Loss']
		}
	},
	{
		id: 72,
		name: 'V.Pents',
		isUpright: true,
		description: {
			upright:
				'The 5 of Pentacles embodies feelings of financial hardship, loss, and insecurity. This card signifies a time when you may be struggling to make ends meet or feeling excluded from opportunities. It encourages you to acknowledge these difficulties but also reminds you that support is available. The 5 of Pentacles asks you to open your eyes to the resources and help around you, even if they’re not immediately apparent. It may be time to let go of any pride and seek assistance, whether from others or through finding new opportunities for growth and stability.',
			reversed:
				'The 5 of Pentacles reversed signals recovery, healing, and the end of a difficult financial or emotional period. This card suggests that the worst is behind you, and you are beginning to see the light at the end of the tunnel. If you’ve been facing financial struggles or personal hardships, you’re now moving toward a better place. The reversed 5 of Pentacles encourages you to reflect on how far you’ve come, and to embrace new opportunities for stability and success. It’s a reminder that things can improve, and help is available if you open yourself to it.'
		},
		keywords: {
			upright: ['Material Loss', 'Struggle', 'Poverty'],
			reversed: ['Recovery', 'Regaining What Was Lost', 'New Opportunities']
		}
	},
	{
		id: 73,
		name: 'VI.Pents',
		isUpright: true,
		description: {
			upright:
				'The 6 of Pentacles represents generosity, charity, and balance in giving and receiving. This card signifies a time when you are either in a position to help others or are receiving assistance yourself. It embodies the flow of energy and resources, highlighting the importance of fairness and reciprocity. The 6 of Pentacles encourages you to approach situations with an open heart, whether you’re giving or receiving. It’s a reminder that true abundance comes from sharing what you have, and that generosity often brings rewards in unexpected ways.',
			reversed:
				"The 6 of Pentacles reversed signifies imbalance in giving and receiving. This card suggests that you may be overextending yourself, giving more than you’re receiving, or vice versa. It can also indicate a situation where there is a lack of fairness or generosity, either from you or others. The reversed 6 of Pentacles encourages you to reassess how you're distributing your resources—whether that’s time, energy, or money—and ensure that things are in balance. Be mindful of any exploitation or feelings of being taken advantage of, and seek to restore fairness in your interactions."
		},
		keywords: {
			upright: ['Generosity', 'Charity', 'Balance'],
			reversed: ['Debt', 'Imbalance', 'One-Sided Giving']
		}
	},
	{
		id: 74,
		name: 'VII.Pents',
		isUpright: true,
		description: {
			upright:
				"The 7 of Pentacles represents patience, evaluation, and long-term investment. This card signifies a time when you’re assessing your progress and wondering if the effort you've invested will pay off. It embodies the idea of waiting for the fruits of your labor to ripen. The 7 of Pentacles encourages you to be patient and trust that your efforts will yield results in time. It’s a reminder that slow and steady progress often leads to sustainable success. This card asks you to reflect on your goals and ensure you're on the right path to manifesting your desired outcomes.",
			reversed:
				'The 7 of Pentacles reversed signals frustration, impatience, and a lack of progress. This card suggests that you may be feeling as though your efforts are not producing the results you hoped for. You may be tempted to give up or take shortcuts, but the reversed 7 of Pentacles encourages you to stay committed. Reevaluate your strategy and be willing to adapt if necessary. Instead of rushing, it’s time to refocus and stay dedicated, even if the rewards are taking longer than expected. Growth takes time, and it’s important not to lose sight of the bigger picture.'
		},
		keywords: {
			upright: ['Patience', 'Long-Term Investment', 'Assessment'],
			reversed: ['Impatience', 'Lack of Progress', 'Poor Returns']
		}
	},
	{
		id: 75,
		name: 'VIII.Pents',
		isUpright: true,
		description: {
			upright:
				'The 8 of Pentacles embodies mastery, skill development, and hard work. This card signifies a period of focus and dedication to refining your craft or mastering a particular skill. You are willing to put in the effort required to improve, and you are committed to your personal or professional growth. The 8 of Pentacles encourages you to continue working diligently, knowing that your hard work will pay off. It’s a reminder that success comes from putting in the hours and paying attention to the details. Trust in the process of learning and honing your talents.',
			reversed:
				'The 8 of Pentacles reversed signals lack of focus, skill stagnation, or a failure to put in the necessary effort. This card suggests that you may be cutting corners or not dedicating enough time to developing your craft. You could be feeling uninspired, burnt out, or distracted from your goals. The reversed 8 of Pentacles encourages you to reassess your commitment and refocus your energy. Take a break if necessary, but make sure you’re still on the path toward mastery. Don’t let distractions derail your progress, and remember that true success requires consistent effort and attention to detail.'
		},
		keywords: {
			upright: ['Skill', 'Craftsmanship', 'Dedication'],
			reversed: ['Lack of Progress', 'Poor Effort', 'Boredom']
		}
	},
	{
		id: 76,
		name: 'IX.Pents',
		isUpright: true,
		description: {
			upright:
				'The 9 of Pentacles signifies independence, luxury, and self-sufficiency. This card embodies the rewards of hard work, showing that you have created a stable and comfortable life through your efforts. It represents a time of financial and personal abundance, where you can enjoy the fruits of your labor. The 9 of Pentacles encourages you to take pride in your accomplishments and the lifestyle you’ve created. It’s a reminder that you have earned your success and are now in a position to enjoy the comforts of your own making. Indulge in your achievements, but remain grounded and self-sufficient.',
			reversed:
				'The 9 of Pentacles reversed signals a lack of independence, financial insecurity, or dissatisfaction despite external success. This card may indicate that you’re feeling unfulfilled or unable to enjoy the material rewards you’ve worked for. It could suggest a need to reassess your relationship with money, independence, and self-worth. The reversed 9 of Pentacles encourages you to regain a sense of control over your life and finances. Reflect on any areas where you may have been overly dependent on others or where luxury has overshadowed your inner happiness. True abundance comes from within.'
		},
		keywords: {
			upright: ['Wealth', 'Self-Sufficiency', 'Luxury'],
			reversed: ['Materialism', 'Loneliness', 'Overindulgence']
		}
	},
	{
		id: 77,
		name: 'X.Pents',
		isUpright: true,
		description: {
			upright:
				'The 10 of Pentacles represents wealth, family, and long-term legacy. This card signifies the culmination of your efforts, where financial security and abundance extend beyond your own needs and toward future generations. It embodies the fulfillment of long-term goals, providing for your family, and building a stable foundation for those who come after you. The 10 of Pentacles encourages you to consider your legacy and the impact you have on future generations. This card reminds you that the greatest wealth lies in building a life that is secure, abundant, and lasting.',
			reversed:
				'The 10 of Pentacles reversed signals instability, family issues, or a failure to plan for the future. This card suggests that you may be struggling to achieve long-term stability or feeling disconnected from your family or inheritance. There could be a sense of insecurity or instability regarding your financial future. The reversed 10 of Pentacles encourages you to address any family conflicts or issues related to your financial legacy. It may be time to reconsider your long-term goals, ensuring that you’re building a secure and stable foundation for yourself and your loved ones.'
		},
		keywords: {
			upright: ['Legacy', 'Family', 'Generational Wealth'],
			reversed: ['Loss of Family Support', 'Financial Instability', 'Family Disputes']
		}
	},
	{
		id: 78,
		name: 'A.Pents',
		isUpright: true,
		description: {
			upright:
				'The Ace of Pentacles represents new beginnings, prosperity, and opportunity. This card signifies a fresh start in your material world, offering a potential opportunity for financial gain or stability. It embodies the manifestation of your desires into tangible form and encourages you to take advantage of any opportunities that come your way. The Ace of Pentacles reminds you to focus on creating solid foundations for long-term success. It’s a reminder that you have the potential to manifest abundance through hard work, practical planning, and disciplined effort. Take the first step toward securing your future.',
			reversed:
				'The Ace of Pentacles reversed suggests missed opportunities, financial setbacks, or a lack of manifestation. This card indicates that you may be feeling blocked from achieving your goals or that opportunities for prosperity may be slipping away. It could be a sign that you are not taking advantage of the opportunities available to you, or that your efforts to create wealth or security are stalled. The reversed Ace of Pentacles encourages you to reassess your approach and remove any barriers to success. Reflect on your long-term goals and focus on building a solid foundation, no matter how small the first step may be.'
		},
		keywords: {
			upright: ['New Beginnings', 'Wealth', 'Manifestation'],
			reversed: ['Missed Opportunities', 'Lack of Focus', 'Wasted Potential']
		}
	}
];
