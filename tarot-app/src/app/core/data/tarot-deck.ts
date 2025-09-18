// src/app/core/data/tarot-deck.ts


export type TarotCard = {
    name: string;
    arcana: 'Major' | 'Minor';
    suit?: 'Wands' | 'Cups' | 'Swords' | 'Pentacles';
    keywords: string[];
    upright: string;
    reversed: string;
    };
    
    
    // Start with Major Arcana (22). You can add the 56 Minor Arcana later.
    export const TAROT_DECK: TarotCard[] = [
    { name: 'The Fool', arcana: 'Major', keywords: ['beginnings','leap of faith'], upright: 'Innocence, new starts, trust the journey.', reversed: 'Hesitation, recklessness, fear of the unknown.' },
    { name: 'The Magician', arcana: 'Major', keywords: ['manifest','skill'], upright: 'You have the tools and ability to create.', reversed: 'Scattered energy, manipulation, self-doubt.' },
    { name: 'The High Priestess', arcana: 'Major', keywords: ['intuition','inner knowing'], upright: 'Listen inward; intuition is strong.', reversed: 'Ignoring intuition, secrets withheld.' },
    { name: 'The Empress', arcana: 'Major', keywords: ['nurture','abundance'], upright: 'Creativity, fertility, comfort and growth.', reversed: 'Creative block, over-giving, depletion.' },
    { name: 'The Emperor', arcana: 'Major', keywords: ['structure','authority'], upright: 'Stability, boundaries, leadership.', reversed: 'Rigidity, control issues.' },
    { name: 'The Hierophant', arcana: 'Major', keywords: ['tradition','teaching'], upright: 'Guidance, learning from frameworks.', reversed: 'Question tradition; make your own path.' },
    { name: 'The Lovers', arcana: 'Major', keywords: ['choice','alignment'], upright: 'Values-aligned choices and connection.', reversed: 'Indecision or misalignment.' },
    { name: 'The Chariot', arcana: 'Major', keywords: ['willpower','victory'], upright: 'Discipline and forward motion; victory through focus.', reversed: 'Conflicted direction, scattered drive.' },
    { name: 'Strength', arcana: 'Major', keywords: ['courage','compassion'], upright: 'Gentle inner strength and compassion.', reversed: 'Self-doubt, harsh inner critic.' },
    { name: 'The Hermit', arcana: 'Major', keywords: ['solitude','wisdom'], upright: 'Quiet reflection, seeking truth within.', reversed: 'Loneliness, avoidance of guidance.' },
    { name: 'Wheel of Fortune', arcana: 'Major', keywords: ['cycles','luck'], upright: 'Change is coming; cycles turn.', reversed: 'Resistance to change or bad timing.' },
    { name: 'Justice', arcana: 'Major', keywords: ['balance','truth'], upright: 'Fairness, clarity, consequences.', reversed: 'Bias, unfair outcomes, delays.' },
    { name: 'The Hanged Man', arcana: 'Major', keywords: ['surrender','perspective'], upright: 'Pause, see a new angle, surrender.', reversed: 'Stuck perspective, needless delay.' },
    { name: 'Death', arcana: 'Major', keywords: ['ending','transformation'], upright: 'Transformation and meaningful endings.', reversed: 'Fear of change, stagnation.' },
    { name: 'Temperance', arcana: 'Major', keywords: ['balance','integration'], upright: 'Moderation and blending of opposites.', reversed: 'Excess, imbalance, disharmony.' },
    { name: 'The Devil', arcana: 'Major', keywords: ['shadow','attachment'], upright: 'Facing attachments and shadow patterns.', reversed: 'Breaking free; reclaiming agency.' },
    { name: 'The Tower', arcana: 'Major', keywords: ['upheaval','revelation'], upright: 'Sudden shift that clears the way.', reversed: 'Avoided disaster or prolonged instability.' },
    { name: 'The Star', arcana: 'Major', keywords: ['hope','renewal'], upright: 'Healing, hope, calm after trial.', reversed: 'Loss of faith, delayed recovery.' },
    { name: 'The Moon', arcana: 'Major', keywords: ['intuition','uncertainty'], upright: 'Dreams, intuition, things unseen.', reversed: 'Confusion, illusions lifted.' },
    { name: 'The Sun', arcana: 'Major', keywords: ['joy','clarity'], upright: 'Success, clarity, warmth and play.', reversed: 'Temporary setback or blocked joy.' },
    { name: 'Judgement', arcana: 'Major', keywords: ['rebirth','calling'], upright: 'Awakening and important decisions.', reversed: 'Self-doubt about next steps.' },
    { name: 'The World', arcana: 'Major', keywords: ['completion','wholeness'], upright: 'Completion, integration, a cycle fulfilled.', reversed: 'Unfinished business, near completion.' }
    ];