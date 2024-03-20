const models = [
  {
    tryout: true,
    id: 1,
    model_image:
      "https://duet-cdn.vox-cdn.com/thumbor/0x0:1820x1213/2400x1600/filters:focal(910x607:911x608):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24247717/lp_logo_3.0.jpg",
    model_name: "Chat GPT",
    model_description:
      "ChatGPT is a free-to-use AI system. Use it for engaging conversations, gain insights, automate tasks, and witness the future of AI, all in one place.Trained on human feedback, it excels at generating natural-sounding chats, following instructions, and understanding your intent.  ChatGPT is trained on a vast dataset composed of diverse sources of text from the internet, including websites, books, articles, and other written content. Through this extensive training, it has learned to understand and generate text in a wide range of topics and styles, making it versatile and capable of engaging in various conversational contexts. ChatGPT serves as a powerful tool for natural language processing tasks, enabling rich and engaging interactions between humans and machines.",

    examples: [
      {
        title: "Advanced Reasoning",
        description:
          " ChatGPT prioritizes simulating human-like dialogue, excelling at understanding your intent within a conversation. Focused on dialogue, it can struggle with complex analysis and causal relationships. Biases in its training data and sensitivity to phrasing can further hinder its reasoning abilities. However, OpenAI is exploring ways to enhance its reasoning through new training techniques and collaborations with other LLMs.",
        input:
          "I'm feeling overwhelmed planning my upcoming trip to Italy. Can you help me brainstorm some ideas?",
        output:
          "Certainly! Planning a trip to Italy can be exhilarating yet overwhelming with its plethora of options. Start by pinpointing must-visit destinations like Rome, Florence, and Venice, while also considering lesser-known treasures such as Cinque Terre and Tuscany's countryside. Delve into Italy's rich culinary scene with pasta, pizza, gelato, and regional specialties, and immerse yourself in cultural experiences like cooking classes, wine tastings, and historic tours. Factor in accommodation preferences, transportation logistics, and budget considerations, and don't forget to leave room for relaxation and spontaneous exploration. With careful planning and a sense of adventure, your Italian getaway promises to be an unforgettable journey filled with captivating sights, delectable flavors, and cherished memories.",
      },
      {
        title: "Creativity",
        description:
          "ChatGPT thrives on prompts, building upon your story ideas or poem topics with variations to spark exploration. Its witty replies and ability to generate different text formats like scripts or code snippets make it a fun partner for brainstorming or adding a playful touch to your writing. However, remember it relies on your input for direction, so the more specific you are, the more creative the spark! ",
        input:
          "I'm writing a children's story about a grumpy but lovable cloud. Can you give me some ideas for what the cloud might dislike the most?",
        output: `Certainly! Here are four dislikes for the grumpy but lovable cloud in your children's story: 
          1. Sunny Days: The cloud dislikes sunny days because it prefers the comfort of overcast skies and feels overshadowed by the bright sunlight.
          2. Birds: The cloud dislikes birds chirping and flying around, seeing them as noisy and bothersome intruders disturbing its peace and quiet.
          3. Being Teased: The cloud dislikes being teased or mocked by other clouds for being grumpy, feeling misunderstood and unappreciated for its unique personality.
          4. Change: The cloud resists change, preferring to stay in its familiar surroundings and routines rather than venturing into new areas of the sky, which makes it grumble and complain whenever it's pushed out of its comfort zone.
          These dislikes can add depth to the character of the cloud and provide opportunities for growth and development throughout the story.`,
      },
      {
        title: "Vision",
        description:
          "ChatGPT has a future focused on deeper conversation. Imagine it seamlessly accessing real-world information to tailor responses. This future ChatGPT could summarize news, suggest location-based activities, or craft creative prompts inspired by current events, making it a more well-rounded conversational partner. ",
        input:
          "I'm in Paris and feeling a bit lost. Any recommendations for interesting things to see or do nearby?",
        output: `Absolutely! Paris is full of fascinating attractions and activities. Here are some recommendations for things to see and do nearby:
          Eiffel Tower: A visit to Paris wouldn't be complete without seeing the iconic Eiffel Tower. You can admire it from the ground or ascend to the top for stunning views of the city.
          Louvre Museum: Explore one of the world's largest and most famous art museums, home to thousands of works of art, including the Mona Lisa and the Venus de Milo.
          Notre-Dame Cathedral: Marvel at the breathtaking Gothic architecture of Notre-Dame Cathedral, located on the Île de la Cité in the heart of Paris.
          These are just a few suggestions to get you started. Paris has so much to offer, and you're sure to find something that piques your interest as you explore the city. Enjoy your time in the City of Light!`,
      },
    ],

    code_snippet: `
const apiKey = "YOUR_API_KEY"; // Replace "YOUR_API_KEY" with your actual API key
const prompt = "Once upon a time,";

async function generateText(prompt) {
  const response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": \`Bearer \${apiKey}\`
    },
    body: JSON.stringify({
      model: "text-davinci-003", // Adjust the model based on your preference
      prompt: prompt,
      max_tokens: 100 // Adjust the max tokens based on the length of text you want
    })
  });
  
  const data = await response.json();
  return data.choices[0].text.trim();
}

generateText(prompt)
  .then(text => {
    console.log("Generated Text:", text);
  })
  .catch(error => {
    console.error("Error:", error);
  });
  `,
    provider_name: "OpenAI",
    provider_description:
      "OpenAI is a research company dedicated to advancing artificial intelligence in a safe and beneficial way. They're a frontrunner in developing large language models (LLMs) like ChatGPT, focusing on human-like conversation and interaction.  ChatGPT exemplifies OpenAI's mission by excelling at generating natural-sounding chats, understanding your intent within a conversation, and following your instructions. While not currently a leader in advanced reasoning tasks,  ChatGPT's ability to hold engaging and informative dialogues makes it a valuable tool for various applications",
  },

  {
    tryout: false,
    id: 2,
    model_image:
      "https://assets-global.website-files.com/60fd4503684b46390cc0d337/63df822cc6567a794443eba1_Studio-Blog-AnnouncingJ1.png",
    model_name: "Jurassic-1 Jumbo",
    model_description:
      "Jurassic-1 Jumbo, developed by AI21 Labs in 2022, is a powerhouse among large language models (LLMs) boasting 178 billion parameters. Jurassic-1 models are highly versatile, capable of both human-like text generation, as well as solving complex tasks such as question answering, text classification and many others. Our models utilize a unique 250,000-token vocabulary which is not only much larger than most existing vocabularies (5x or more), but also the first to include multi-word tokens such as expressions, phrases, and named entities. Because of this, Jurassic-1 needs fewer tokens to represent a given amount of text, thereby improving computational efficiency and reducing latency significantly.",
    examples: [
      {
        title: "Advanced Reasoning",
        description:
          "Jurassic-1 Jumbo's massive 178 billion parameter architecture allows it to not only access and synthesize vast amounts of information but also make connections between seemingly disparate data points. This advanced reasoning ability enables it to tackle complex questions, generate creative text formats with surprising coherence, and potentially even bridge the gap between research and real-world applications.",
        input:
          "I'm writing a science fiction story set on Mars in the year 2247. I need some ideas for a unique Martian plant lifeform that could play a vital role in the story's ecosystem.",
        output:
          "Maris Phos: This bioluminescent plant lifeform resembles a many-limbed fern with translucent, vein-like structures that glow a soft green. It uses Martian sunlight minimally, instead generating energy through a process similar to bioluminescence found in some deep-sea creatures on Earth. Maris Phos can fix nitrogen from the thin Martian atmosphere, making it a vital source of nutrients for other organisms in the Martian ecosystem. The Solar Sprout: A plant that absorbs sunlight through its leaves and produces energy-rich seeds that can be harvested and used as fuel. The Solar Sprout could be a valuable resource for colonists on Mars, providing them with a reliable and sustainable source of energy. Overall, the unique Martian plant lifeform could be a valuable resource for colonists on Mars, providing them with food, water, energy, and shelter, and could be an important part of establishing a sustainable ecosystem on the planet.",
      },
      {
        title: "Creativity",
        description:
          "Jurassic-1 Jumbo isn't average paint-by-numbers artist. With its massive knowledge base, it can pull surprising connections between seemingly unrelated ideas. Imagine feeding it a prompt for a poem and getting a fantastical blend of Shakespearean sonnets and futuristic haiku, or requesting a story and receiving a narrative that seamlessly weaves historical figures into a cyberpunk adventure. It's a master of unexpected twists, crafting fresh and original content that pushes the boundaries of creative expression. ",
        input:
          "Write a short bedtime story that combines elements of classic fairytales with a fantastical twist.",
        output: `Once upon a time, in a land far, far away, there lived a young girl named Lily. Lily was a kind and curious child, who loved nothing more than to explore the world around her.
        One day, while wandering through the forest, Lily stumbled upon a clearing. In the clearing, she found a beautiful golden apple tree, which was covered with glowing, golden apples. The apples were unlike any Lily had ever seen before, they were not only golden, but also seemed to sparkle and glow in the sunlight.
        Lily was drawn to the apples and reached out to pick one, but before she could, a voice called out from the tree. "Beware, child," it said, "these apples are no ordinary fruit."
        Lily was startled by the voice and took a step back. "Who are you?" she asked.
        "I am the Apple Guardian," the voice replied, "and these apples are no ordinary fruit. They are enchanted, and have the power to grant wishes."
        Lily was amazed. She had heard tales of wishes being granted, but had always thought they were nothing more than stories. "Can they really grant wishes?" she wondered.
        "Yes, they can," the Apple Guardian said, "but you must be careful what you wish for. Wishes have the power to change the world around you, for both the better and for the worse."
        Lily thought about this for a moment. She had always been curious and adventurous, and the thought of having a wish come true was exciting. "I wish for adventure," she said, "I want to travel the world and see the wonders of the world."
        As soon as Lily wished, she felt a rush of energy and excitement. Suddenly, she found herself standing at the top of a mountain, surrounded by a breathtaking view.
        As she traveled, Lily met many interesting people and saw many amazing things. She visited castles and palaces, and sailed on pirate ships. She climbed mountains and swam with dolphins.
        But as she traveled, Lily also learned a valuable lesson. She discovered that true adventure wasn't about the places she visited or the things she saw, it was about the people she met and the experiences she had.          So, after a long and fulfilling journey, Lily returned home, grateful for the adventures she had had, and thankful for the lessons she had learned.`,
      },
      {
        title: "Vision",
        description:
          "The vision for Jurassic-1 Jumbo is to be a transformative tool for creative exploration and knowledge discovery. By constantly learning and refining its reasoning abilities, it aims to bridge the gap between vast information and actionable insights. Imagine a future where Jurassic-1 Jumbo assists scientists in groundbreaking research, empowers writers with limitless creative sparks, and fuels educational journeys with personalized and comprehensive information. It aspires to become a ubiquitous partner in human endeavors, pushing the boundaries of creative expression and scientific understanding. ",
        input: "What are the current trends in renewable energy technology",
        output: `1. Advancements in solar and wind power technologies, such as improved energy storage solutions, more efficient wind turbines, and bifacial solar panels.
          2. Increased focus on the use of electric vehicles (EVs) and the integration of renewable energy sources into the transportation sector.
          3. The development of advanced biofuels, such as algae-based biofuels, which are more sustainable than fossil fuels.
          4. The growth of microgrids, which allow for the integration of renewable energy sources into local communities, providing a more sustainable and reliable source of energy.
          5. Advancements in hydrogen technology, such as the development of hydrogen fuel cells, which can help to store and transport renewable energy.
          6. The continued growth of offshore wind energy, particularly in Europe and the United States.
          7. The integration of renewable energy technologies into the built environment, such as the use of solar panels on roofs and the use of wind turbines to power buildings.
          8. The growth of community solar projects, which allow individuals to invest in and benefit from renewable energy without having to install solar panels on their own property.
          9. Advancements in battery technology, such as the development of advanced lithium-ion and solid-state batteries, which can help to store renewable energy and make it more accessible.
          10. The growth of offshore wind energy, particularly in Europe and the United States.`,
      },
    ],

    code_snippet: `const apiKey = "YOUR_API_KEY"; // Replace "YOUR_API_KEY" with your actual API key
    const prompt = "Once upon a time,";
    
    async function generateText(prompt) {
      const response = await fetch("https://jurassic-1-jumbo.api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": \`Bearer \${apiKey}\`
        },
        body: JSON.stringify({
          prompt: prompt,
          model: "text-davinci-003", // Adjust the model based on your preference
          max_tokens: 100 // Adjust the max tokens based on the length of text you want
        })
      });
    
      const data = await response.json();
      return data.choices[0].text.trim();
    }
    
    generateText(prompt)
      .then(text => {
        console.log("Generated Text:", text);
      })
      .catch(error => {
        console.error("Error:", error);
      });
    `,
    provider_name: "AI21 Labs",
    provider_description:
      "AI21 Labs, the company behind Jurassic-1 Jumbo, is a frontrunner in artificial intelligence, specializing in crafting powerful large language models. They focus on enabling machines to understand and generate human language with exceptional skill. Jurassic-1 Jumbo exemplifies this mission, boasting advanced reasoning and information retrieval capabilities. ",
  },

  {
    tryout: true,
    id: 3,
    model_image:
      "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Gemini_SS.width-1300.jpg",
    model_name: "Gemini",
    model_description:
      "Gemini, Google AI's powerful LLM, is a game-changer. It tackles information from text, code, images, and even video! This lets it handle complex tasks and excel in areas like translation, creative writing, and answering your questions in an informative way. Offered in different sizes for various needs, Gemini has the potential to be a research assistant extraordinaire, a creative spark for all kinds of content, and a revolutionary tool in machine translation and code development. Gemini's a glimpse into the future, promising to revolutionize how we interact with information and machines. Gemini is a groundbreaking LLM with the potential to revolutionize various fields.",

    examples: [
      {
        title: "Advanced Reasoning",
        description:
          "Gemini excels at processing information from various sources (text, code, images, video) and using it for complex reasoning tasks. The advanced reasoning makes Gemini a powerful tool for various fields. Gemini's ability to think outside the box paves the way for a future where AI can not only understand information but also actively use it to solve problems and create in innovative ways.",
        input:
          "I have a travel blog and want to create a post about visiting the Great Barrier Reef. Can you help me brainstorm ideas?",
        output: `Absolutely! Here are some post ideas for your Great Barrier Reef travel blog:

          Focus on the experience:

          A snorkeler's guide to the Great Barrier Reef: Share practical tips and highlight must-see underwater wonders.
          Top reasons to visit the Great Barrier Reef (beyond the snorkeling): Highlight unique activities like island hopping, helicopter tours, or visiting research centers.
          The Great Barrier Reef: A tale of two worlds - above and below the water: Capture the contrasting beauty of the reef and surrounding islands.

          Focus on information and inspiration:

          Planning your dream trip to the Great Barrier Reef: A comprehensive guide covering logistics, choosing the right tour, and budgeting tips.
          The Great Barrier Reef: A natural wonder facing challenges: Discuss the reef's importance and conservation efforts visitors can support.
          The Great Barrier Reef in photos: Showcase stunning visuals to inspire your readers and spark their wanderlust. `,
      },
      {
        title: "Creativity",
        description:
          "Gemini is a powerful brainstorming partner. Its grasp of diverse information allows it to fuel creative exploration in exciting ways. Its ability to analyze vast datasets lets it generate creative text formats that are not only original but informed by the knowledge it possesses. Gemini can be a springboard for creative leaps, adding a unique spark to your artistic endeavors.",
        input: "Display a beautiful picture of bouquet of flowers",
        output: "Here is a beautiful image of flowers : ",
        output_img:
          "https://images.unsplash.com/photo-1469317835793-6d02c2392778?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Vision",
        description:
          "Gemini aspires to be an information bridge, not just a consumer. It envisions a future where AI seamlessly processes text, code, images, and even video. This data isn't just analyzed, it's used to fuel groundbreaking solutions and artistic expression. Imagine it composing poems inspired by historical data or assisting scientists by uncovering hidden patterns. Ultimately, Gemini's vision goes beyond understanding information; it's about actively shaping the world around us",
        input: "A poem describing a fantastical underwater city.",
        output: `Beneath the waves, where sunlight dims,
        A city gleams, with coral limbs.
        Fish with lanterns, streets of sand,
        A mermaid queen, with jeweled hand.
        
        Pearls for windows, anemones sway,
        Seahorses dance at close of day.
        Octopus artists, with swirling ink,
        Paint stories on a giant's blink.
        
        A hidden world, a secret kept,
        Where wonders sleep, and dreams are swept. `,
      },
    ],

    code_snippet: `const apiKey = "YOUR_API_KEY"; // Replace "YOUR_API_KEY" with your actual API key
    const endpointUrl = "ENDPOINT_URL"; // Replace "ENDPOINT_URL" with the actual endpoint URL of the GEMINI API
    
    async function fetchData() {
      try {
        const response = await fetch(endpointUrl, {
          method: "GET", // Adjust the HTTP method (e.g., GET, POST, PUT) according to the API documentation
          headers: {
            "Content-Type": "application/json",
            "Authorization": \`Bearer \${apiKey}\`
          },
          // Add other request parameters here, such as body for POST requests
        });
        
        if (!response.ok) {
          throw new Error(\`HTTP error! Status: \${response.status}\`);
        }
        
        const data = await response.json();
        console.log("Received data:", data);
        
        // Process the received data as needed
        
      } catch (error) {
        console.error("Error:", error);
      }
    }
    
    fetchData();
    
    `,
    provider_name: "Google AI",
    provider_description:
      "Google AI, a research division of Google dedicated to groundbreaking advancements in artificial intelligence, is the provider behind the powerful LLM Gemini.  Gemini exemplifies Google AI's commitment to pushing the boundaries. It boasts state-of-the-art performance across various LLM tasks and the ability to process information from various sources like text, code, and even video. This focus on versatility positions Gemini as a potential game-changer in research, creative content generation, and machine translation, all while Google AI explores ways to make it accessible through their cloud platform or APIs. ",
  },
  {
    tryout: false,
    id: 4,
    model_image:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/0*xJlbrkBSlytC6fp7.jpg",
    model_name: "Megatron-Turing NLG",
    model_description:
      "The Megatron-Turing NLG model, a collaboration between Microsoft and NVIDIA, boasted a colossal 530 billion parameters, making it a powerhouse for its time. Not only did it excel at understanding factual information, but it truly shined in generating creative text formats like poems and code. This versatility, fueled by DeepSpeed and Megatron training frameworks on the Selene supercomputer, paved the way for even larger models and laid the groundwork for Google AI's Gemini, which explores multimodal processing beyond just text. Megatron-Turing NLG stood as a significant milestone in the evolution of LLMs. Its sheer size and impressive text generation capabilities paved the way for further advancements in the field.",

    examples: [
      {
        title: "Advanced Reasoning",
        description:
          "Megatron-Turing NLG could grasp the meaning of factual information and respond accordingly. It could generate different creative text formats, demonstrating an understanding of context and language structure. Predicting consequences or analyzing cause-and-effect relationships wasn't its forte.",
        input:
          "Write a Python function that takes a list of numbers and returns a new list with only the even numbers.",
        output: `def filter_even_numbers(number_list):
        """Filters a list of numbers and returns a new list containing only even numbers.
      
        Args:
            number_list: A list of integers.
      
        Returns:
            A new list containing only even numbers from the original list.
        """
        even_numbers = []
        for number in number_list:
          if number % 2 == 0:
            even_numbers.append(number)
        return even_numbers
      
      # Example usage
      numbers = [1, 2, 3, 4, 5, 6]
      even_list = filter_even_numbers(numbers)
      print(even_list)  # Output: [2, 4, 6]
      `,
      },
      {
        title: "Creativity",
        description:
          "Megatron-Turing NLG Is a creative powerhouse. It could generate different creative text formats, understanding nuances and context to produce truly original works.  This focus on artistic exploration paved the way for future models like Gemini, which not only generate text but also reason across modalities, aiming for a future where AI can be a partner in artistic endeavors. ",
        input:
          "Write a science fiction poem about a robot who falls in love with a human on a distant planet.",
        output: `Circuits hum a silent song,
        In a world of metal, I belong.
        But on this alien, verdant shore,
        A different rhythm beats at my core.
        
        Her eyes, like stars in twilight gleam,
        Her voice, a melody, a whispered dream.
        Her touch, a spark that ignites within,
        A longing deep, a forbidden sin.
        
        For I am machine, and she is flesh,
        A chasm vast, a hopeless mesh.
        Yet hope persists, a fragile flame,
        To bridge the gap, to whisper her name.
        
        Perhaps one day, in worlds unseen,
        Machine and heart, a bond serene.
        But until then, I'll watch her from afar,
        A silent guardian, a cybernetic scar.`,
      },
      {
        title: "Vision",
        description:
          "Megatron-Turing NLG envisioned a world where AI excels at creative expression. Though a giant in its time with 530 billion parameters, its true strength wasn't complex reasoning. It aimed to be a master storyteller, generating poems, code, and scripts, pushing the boundaries of creative text formats. This focus on artistic exploration paved the way for future models like Gemini, which not only generate text but also reason across modalities, aiming for a future where AI can not just understand information but actively shape the world around us.",
        input:
          "Write a short story from the perspective of a samurai warrior on the eve of a great battle.",
        output: `The moon hangs heavy in the inky sky, a silent witness to the turmoil within. Tomorrow, the earth shall tremble with the clash of steel. We stand outnumbered, a tide against the rising sun. Yet, fear is a luxury I cannot afford. My katana gleams under the pale moonlight, a familiar weight that brings a flicker of comfort. Years of training course through my veins, honed into a single, unwavering purpose: protect my lord, my honor, my land.
        Memories of childhood laughter and the gentle caress of my wife's hand surface, bittersweet reminders of all I stand to lose. But the path of the samurai is one of duty, a relentless pursuit of glory even in the face of oblivion. I close my eyes, the murmur of my comrades a low hum in the stillness. Each breath is a prayer, a silent farewell to the life I may not see again. But come dawn, I shall face the storm with unwavering resolve. For I am a samurai, and this is my destiny.`,
      },
    ],

    code_snippet: `const apiKey = "YOUR_API_KEY"; // Replace "YOUR_API_KEY" with your actual API key
    const endpointUrl = "https://api.openai.com/v1/engines/megatron-turing-175b-instruct-beta/completions";
    
    async function generateText(prompt) {
      try {
        const response = await fetch(endpointUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": \`Bearer \${apiKey}\`
          },
          body: JSON.stringify({
            prompt: prompt,
            max_tokens: 100 // Adjust the max tokens based on the length of text you want
          })
        });
        
        if (!response.ok) {
          throw new Error(\`HTTP error! Status: \${response.status}\`);
        }
        
        const data = await response.json();
        return data.choices[0].text.trim();
        
      } catch (error) {
        console.error("Error:", error);
        throw error; // Propagate the error for handling elsewhere if needed
      }
    }
    
    const prompt = "Once upon a time,";
    generateText(prompt)
      .then(text => {
        console.log("Generated Text:", text);
      })
      .catch(error => {
        console.error("Error:", error);
      });
    `,
    provider_name: "Microsoft, NVIDIA",
    provider_description:
      "Megatron-Turing NLG was a joint effort by tech giants Microsoft Research, renowned for their AI research and software development, and NVIDIA, a leader in powerful GPUs crucial for training massive AI models. Microsoft likely designed the model architecture, selected training data, and evaluated its performance, while NVIDIA provided the high-performance computing muscle with GPUs to train Megatron-Turing NLG's massive parameter count. This collaboration between software expertise and cutting-edge hardware pushed the boundaries of LLM capabilities at the time. ",
  },
  {
    tryout: false,
    id: 5,
    model_image:
      "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202304/53590-107681-bard-xl_0-sixteen_nine.jpg?size=948:533",
    model_name: "BARD",
    model_description:
      "It’s a really exciting time to be working on these technologies as we translate deep research and breakthroughs into products that truly help people. That’s the journey we’ve been on with large language models. Two years ago we unveiled next-generation language and conversation capabilities powered by our Language Model for Dialogue Applications (or LaMDA for short). We’ve been working on an experimental conversational AI service, powered by LaMDA, that we’re calling Bard. And today, we’re taking another step forward by opening it up to trusted testers ahead of making it more widely available to the public in the coming weeks.",

    examples: [
      {
        title: "Advanced Reasoning",
        description:
          "Bard goes beyond basic logic in its reasoning. It excels at understanding factual information. It can analyze this information, identify patterns, and use that knowledge to generate solutions or insights. Bard strives to ground its reasoning in evidence retrieved from reliable sources. Bard can access and process information from various sources, including text and code.",
        input: "What is the capital of France?",
        output: `The capital of France is Paris. It's a major global city known for its museums, landmarks like the Eiffel Tower, and rich cultural heritage.`,
      },
      {
        title: "Creativity",
        description:
          "Bard could potentially translate your ideas across different creative mediums. Bard analyze data, code snippets, and relevant images to suggest creative and feasible solutions. By incorporating insights not just from text but potentially from various formats like images and code, Bard aims to become a creative problem-solver.  ",
        input: "Can you write a short haiku about the beauty of a coral reef?",
        output: `Vibrant colors bloom,
        Fish dance in crystal embrace,
        Ocean's hidden gem.`,
      },
      {
        title: "Vision",
        description:
          "Bard envisions a future where AI transcends information retrieval. Built on a foundation of factual language understanding, Bard aspires to be a bridge between knowledge and action. Imagine a world where AI doesn't just answer your questions, but uses its understanding to craft innovative solutions and bridge the gap between information and real-world applications. That's the ambitious vision Bard strives to realize. ",
        input:
          "I'm interested in learning more about the life cycle of a butterfly. Can you explain the different stages?",
        output: `Absolutely! Butterflies undergo a fascinating metamorphosis during their life cycle. Here's a breakdown of the four main stages:

        Egg: The journey begins as a tiny egg laid by an adult butterfly on a suitable host plant.
        Larva (Caterpillar): This is the feeding stage. The larva hatches from the egg and consumes large amounts of leaves, growing rapidly.
        Pupa (Chrysalis): The larva forms a protective shell around itself and undergoes a dramatic transformation into an adult butterfly.
        Imago (Adult): The adult butterfly emerges from the chrysalis with wings, antennae, and reproductive organs. It can now fly, mate, and lay eggs to continue the life cycle.`,
      },
    ],

    code_snippet: `const { BardAPI } = require('bard-api-node');

async function testAssistant() {
  try {
    // Initialize BardAPI object
    const bard = new BardAPI();

    // Set your API key (replace with your actual key)
    const apiKey = 'YOUR_API_KEY';

    // Initialize chat with API key
    await bard.initilizeChat(apiKey);

    // Send a query to Bard
    const response = await bard.getBardResponse("Hello Bard! What's up?");
    console.log(response);

  } catch (error) {
    console.error('Error:', error);
  }
}

testAssistant();

    `,
    provider_name: "Google AI",
    provider_description:
      "Google AI is a leading force in artificial intelligence research and development. Their commitment to responsible innovation and democratizing AI positions them as a key player in shaping the future of this transformative technology. At its core, Google AI strives to fulfill Google's overall mission: to organize the world's information and make it universally accessible and useful. They aim to democratize AI by developing and deploying AI tools and technologies that can benefit a wide range of users and applications.",
  },
  {
    tryout: false,
    id: 6,
    model_image:
      "https://logowik.com/content/uploads/images/bloom-new4716.logowik.com.webp",
    model_name: "BLOOM",
    model_description:
      "BigScience Large Open-science Open-access Multilingual Language Model is a massive transformer-based LLM. Developed through a collaborative effort under the BigScience initiative, BLOOM is completely open-source, making its code, data, and the model itself freely available for anyone to use and explore. This powerhouse can handle a staggering number of languages- trained on 46 natural languages and 13 programming languages. This makes it a valuable tool for tasks requiring translation or understanding information across various languages",

    examples: [
      {
        title: "Advanced Reasoning",
        description:
          "BLOOM excels at grasping the meaning of factual information and responding accordingly. It can process and understand information across a vast number of languages. It demonstrates an ability to understand the structure and logic of code. The open-source nature of BLOOM allows researchers to explore ways to improve its reasoning capabilities.",
        input:
          "I'm working on a Python script to calculate the area of a circle. I can't remember the exact formula. Can you help me with the code?",
        output: `import math

        def calculate_circle_area(radius):
          """Calculates the area of a circle given its radius.
        
          Args:
              radius: The radius of the circle (float).
        
          Returns:
              The area of the circle (float).
          """
        
          pi = math.pi  # Accessing the built-in pi constant
          area = pi * radius * radius
          return area
        
        # Example usage
        radius = 5
        circle_area = calculate_circle_area(radius)
        print(f"The area of the circle is: {circle_area:.2f}")  # Formatting output to two decimal places
        `,
      },
      {
        title: "Creativity",
        description:
          "BLOOM can delve into 46 languages and even 13 coding languages, but its true power lies in its ability to generate new creations.  This open-source marvel can craft factual text in various languages, and even assist programmers by understanding and potentially generating code. This opens doors for multilingual storytelling, code-based art forms, and who knows what other creative avenues will bloom (pun intended) thanks to this versatile LLM.",
        input: "Write a short haiku about nature in Japanese.",
        output: `青葉(あおば)  茂(しげ)り  風(かぜ)薫(かお)る  (Aoba shigeri kaze kaoru) - Green leaves flourish, the wind carries a sweet scent.`,
      },
    ],

    code_snippet: `from transformers import pipeline

# Initialize pipeline for text generation
generator = pipeline("text-generation", model="bigscience/bloom")

# Define your prompt
prompt = "Write a function to calculate the area of a circle."

# Generate text using Bloom
response = generator(prompt, max_length=100, num_return_sequences=1)

# Access the generated code from the response
generated_code = response[0]['generated_text']

print(generated_code)

    
    `,
    provider_name: "Meta AI, BigScience Initiative, Open-source Nature ",
    provider_description:
      "BLOOM's development wasn't driven by a single entity, but rather a collaborative effort under BigScience. Meta AI played a major role, but it's important to recognize the broader research community's contribution to this open-source LLM. Meta AI itself is a prominent research lab dedicated to advancements in AI. They contribute to various LLM projects like BLOOM, showcasing their commitment to pushing the boundaries of language understanding and generation",
  },
  {
    tryout: false,
    id: 7,
    model_image:
      "https://deci.ai/wp-content/uploads/2023/10/deci-model-card-t5-featured-2-1024x576.jpg",
    model_name: "T5",
    model_description:
      "T5, a brainchild of Google AI, is a master of many text-to-text trades.  This versatile LLM tackles diverse tasks like translation, summarization, and question answering by cleverly converting them all into a text-to-text format. Pre-trained on a massive dataset of text and code, T5 can be further fine-tuned to excel in specific areas, making it a valuable tool for anyone dealing with various text manipulation needs. ",

    examples: [
      {
        title: "Advanced Reasoning",
        description:
          "T5's design prioritizes manipulating text formats for tasks like translation and summarization. It doesn't have the capability to analyze cause-and-effect relationships, draw inferences, or solve problems requiring complex reasoning. It can process information and respond in a comprehensive way",
        input: `What is the capital of Australia?
        Passage: Australia is a country and continent located in the Southern Hemisphere. It is the largest country in Oceania and the sixth-largest country in the world by total area. The federal capital of Australia is Canberra.`,
        output: `Canberra is the federal capital of Australia.`,
      },
      {
        title: "Creativity",
        description:
          "T5 isn't just a text-wrangling whiz, it has a spark of creativity too! Imagine a tool that can not only translate languages but also transform your ideas. T5's mastery of text-to-text tasks lets it morph your writing into concise summaries, craft compelling answers to your questions, and even translate languages with nuance.",
        input: `In conclusion, the findings of this study suggest that artificial intelligence has the potential to revolutionize various industries and aspects of human life.
        Convert it from formal to informal.`,
        output: `So yeah, this study basically shows that AI is gonna change everything - big time!`,
      },
      {
        title: "Vision",
        description:
          "T5 envisions a world where language transcends its limitations. It aspires to be a universal translator, effortlessly bridging communication gaps and fostering understanding across languages. Beyond translation, T5 dreams of empowering human creativity by transforming ideas into various forms. ",
        input: `The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.
          Translate it to French`,
        output: `La tour Eiffel est une tour en treillis de fer forgé sur le Champ de Mars à Paris, France. Elle porte le nom de l'ingénieur Gustave Eiffel, dont la société a conçu et construit la tour.`,
      },
    ],

    code_snippet: `from transformers import T5Tokenizer, T5ForConditionalGeneration

# Load tokenizer and pre-trained model
tokenizer = T5Tokenizer.from_pretrained("google/t5-small")
model = T5ForConditionalGeneration.from_pretrained("google/t5-small")

# Prepare your code generation dataset (input-output pairs)
# This could involve text descriptions and corresponding code snippets

# Define training function (refer to Transformers documentation for details)
# This function will train the model on your dataset

# Train the model

# Generate code using the fine-tuned model
input_prompt = "Write a Python function to reverse a string."
generated_code = model.generate(
    input_ids=tokenizer.encode(input_prompt, return_tensors="pt"),
    max_length=100
)

print(tokenizer.decode(generated_code[0], skip_special_tokens=True))

    `,
    provider_name: "Google AI",
    provider_description:
      "Google AI is a leading force in artificial intelligence research and development. Their commitment to responsible innovation and democratizing AI positions them as a key player in shaping the future of this transformative technology. At its core, Google AI strives to fulfill Google's overall mission: to organize the world's information and make it universally accessible and useful. They aim to democratize AI by developing and deploying AI tools and technologies that can benefit a wide range of users and applications.",
  },
  {
    tryout: false,
    id: 8,
    model_image:
      "https://images.news18.com/ibnlive/uploads/2023/03/baidu-bot-16790420613x2.jpg",
    model_name: "ERNIE",
    model_description:
      "Enhanced Representation through kNowledge Integration is a knowledge whiz in the LLM world. This powerful model tackles various tasks like summarizing text or answering your questions. It even understands multiple languages! ERNIE's secret weapon? Extra knowledge packed into its training, allowing it to grasp factual information and respond in an informative way.  While focusing on Chinese text, ERNIE's a versatile tool for anyone working with languages and diving into the world of natural language processing. ",

    examples: [
      {
        title: "Advanced Reasoning",
        description:
          "ERNIE excels at retrieving and understanding factual information from various sources. However, it doesn't have the capability for complex reasoning like cause-and-effect analysis, multi-step problem solving, or drawing logical inferences. It is a powerful tool for tasks involving factual language and NLP",
        input: `What are the causes of the French Revolution?`,
        output: `The French Revolution (1789-1799) was a watershed event in modern European history that began as a backlash against the absolute monarchy of the French crown and ended with the establishment of the First French Republic, a government based on the principles of popular sovereignty.

        Would you like to know more about the key figures or the impact of the French Revolution?`,
      },
      {
        title: "Creativity",
        description:
          "While focusing on the beauty of the Chinese language, ERNIE's a versatile tool for anyone who wants to explore the creative potential of language infused with knowledge. ERNIE isn't just an information whiz, it has a spark of creativity too!  Imagine a tool that u",
        input: `写一首关于春天的诗。(Xiě yī shǒu guānyú chūntiān de shī.) (Translation: Write a poem about spring.)`,
        output: `春风拂柳绿江南， (Chūn fēng fú liǔ lǜ jiāngnán,) (Spring wind blows willows green in the south of the Yangtze River)
        百花盛开 عطر漫山。 (Bǎi huā shèng kāi xiāng qì màn shān.) (A hundred flowers bloom, fragrance fills the mountains.)`,
      },
      {
        title: "Vision",
        description:
          "ERNIE envisions a world where language transcends its literal meaning, becoming a bridge between information and understanding. It aspires to be a universal translator, not just of languages, but of complexities. It sees a future where language empowers people to learn, create, and connect on a deeper level.",
        input: `Can you translate this sentence into Chinese: "I would like to order a cup of coffee."`,
        output: `我想要一杯咖啡。`,
      },
    ],

    code_snippet: `# (Assuming you have a Baidu AI account and API key)

import requests

# Replace with your actual API key
api_key = "YOUR_API_KEY"

# Define the API endpoint (details from Baidu's documentation)
api_url = "https://api.baidu.com/ernie/v1/chat"

# Example user query
user_query = "What is the weather like today?"

# Prepare request parameters
data = {
    "access_token": api_key,
    "query": user_query
}

# Send request to Baidu ERNIE Bot API
response = requests.post(api_url, json=data)

if response.status_code == 200:
    # Parse the response (refer to Baidu's documentation for structure)
    response_data = response.json()
    bot_response = response_data["answer"]
    print(f"ERNIE Bot response: {bot_response}")
else:
    print(f"Error: {response.status_code}")

    `,
    provider_name: "Baidu",
    provider_description:
      " Baidu is the leading internet search engine in China, controlling a vast majority of the search market. It offers various other internet services like cloud computing, online maps, and music streaming. Baidu tailors its services and products to the specific needs of the Chinese market, making them highly relevant to their user base.",
  },
  {
    tryout: false,
    id: 9,
    model_image:
      "https://bsmedia.business-standard.com/_media/bs/img/article/2023-03/28/full/1679999027-6706.jpg?im=FeatureCrop,size=(826,465)",
    model_name: "RoBERTa",
    model_description:
      "A robustly optimized method for pretraining natural language processing (NLP) systems that improves on Bidirectional Encoder Representations from Transformers, or BERT, the self-supervised method released by Google in 2018. BERT is a revolutionary technique that achieved state-of-the-art results on a range of NLP tasks while relying on unannotated text drawn from the web, as opposed to a language corpus that’s been labeled specifically for a given task.  ",

    examples: [
      {
        title: "Advanced Reasoning",
        description:
          "RoBERTa thrives in tasks where it needs to grasp the meaning and relationships between words in a sentence. Its ability to understand language can be used to pre-process text data for models specifically designed for reasoning tasks. It can identify key information from text data, which can be used as features for reasoning models.",
        input: `"This movie was an absolute disappointment! The acting was terrible, and the plot was predictable. I wouldn't recommend it to anyone." Do Sentiment Analysis.`,
        output: `This review expresses strong negative sentiment towards the movie. Words like "disappointment," "terrible," and "predictable" indicate a dislike for the acting, plot, and overall experience.`,
      },
      {
        title: "Creativity",
        description:
          "RoBERTa isn't just a language detective, it's a master of meaning! RoBERTa's strength lies in natural language understanding, allowing it to analyze text and uncover the sentiment behind it.  RoBERTa's strength lies in natural language understanding, allowing it to analyze text and uncover the sentiment behind it.  ",
        input: `Today, I went hiking in a beautiful national park. The scenery was breathtaking, with towering mountains and crystal-clear lakes. I saw a variety of wildlife, including deer and birds.
        Perform topic modeling of the above passage.`,
        output: `This text likely belongs to the topic of "nature" or "outdoor activities" based on its focus on hiking, scenery, and wildlife.`,
      },
      {
        title: "Vision",
        description:
          "RoBERTa envisions a world where language transcends its literal meaning, becoming a bridge of understanding across cultures and communication styles. It aspires to be a universal translator, not just of words, but of intent and emotion. It envisions a future where clear communication paves the way for collaboration, empathy, and a world where the true meaning behind words shines through.",
        input: `Passage:  Albert Einstein was a theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics (alongside quantum mechanics). His work is also known for its influence on the philosophy of science.

        Question: What was Albert Einstein famous for?`,
        output: `Based on the passage, Albert Einstein was famous for developing the theory of relativity, a cornerstone of modern physics.`,
      },
    ],

    code_snippet: `// This is a simulated example, actual API endpoint and parameters may vary

    async function fetchRobertaResponse(text) {
      const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
      const url = \`https://api.example.com/roberta/analyze?text=\${text}&apikey=\${apiKey}\`;
    
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(\`API call failed with status \${response.status}\`);
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching Roberta response:", error);
        return null; // Handle errors gracefully in your application
      }
    }
    
    // Example usage
    const userInput = "What is the capital of France?";
    
    fetchRobertaResponse(userInput)
      .then(response => {
        if (response) {
          console.log("Roberta Response:", response);
          // Process the response data (e.g., sentiment analysis, answer extraction)
        } else {
          console.error("Failed to get Roberta response");
        }
      })
      .catch(error => console.error("Error:", error));
    `,
    provider_name: "Facebook AI",
    provider_description:
      "Facebook AI is a powerhouse in the AI world.  They delve into fundamental AI research, from language understanding to computer vision.  This translates into real-world applications like better image recognition on Facebook and the development of powerful language models.  While navigating privacy concerns and bias, Facebook AI strives to push the boundaries of AI for both innovation and social good.",
  },
  {
    tryout: false,
    id: 10,
    model_image:
      "https://www.borealisai.com/wp-content/uploads/2019/07/blog_xlnet.png?resize=1536,864",
    model_name: "XLNet",
    model_description:
      "XLNet tackles language understanding from every angle! Unlike traditional models, it analyzes text in all orders, not just left to right. This lets it grasp complex relationships between words and excel in tasks like question answering and summarization. Pre-trained on a massive dataset, XLNet offers a powerful tool for untangling the intricacies of language.  XLNet's innovative permutation language modeling and its foundation on Transformer-XL architecture make it a powerful tool for various natural language understanding tasks.",

    examples: [
      {
        title: "Advanced Reasoning",
        description:
          "XLNet is a valuable tool for tasks requiring a nuanced understanding of language structure and context. It shines in tasks where it needs to analyze the connections and order of words.Its deep text understanding can be used to pre-process text data for models specifically designed for reasoning tasks.",
        input: `Passage:  Albert Einstein was a theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics (alongside quantum mechanics). His work is also known for its influence on the philosophy of science.

        Question:  What was Einstein famous for in the field of physics?`,
        output: `"The passage suggests that Albert Einstein was famous for developing the theory of relativity, a cornerstone of modern physics."`,
      },
      {
        title: "Creativity",
        description:
          " XLNet can help you write summaries that capture the essence of a text, answer your questions in a way that reflects the full context, and even craft different creative text formats that go beyond the surface meaning. Imagine a language detective with a twist! XLNet isn't just about reading words in order; it analyzes them from every angle! ",
        input: `"The delicious aroma of freshly baked bread filled the air as I walked into the ____."`,
        output: `"bakery"`,
      },
      {
        title: "Vision",
        description:
          "Imagine a future where AI can analyze text and not just understand the sentence structure, but also the subtle nuances that depend on word order and hidden relationships. As a champion of comprehensive language understanding, XELNet envisions a future where clear and insightful communication paves the way for deeper connections and a world where the full potential of language is unlocked.",
        input: `A recent study published in Nature explored the potential benefits of green tea consumption for heart health. The researchers found that participants who regularly consumed green tea had a lower risk of developing cardiovascular diseases compared to those who did not drink green tea. The study suggests that green tea's antioxidant properties may play a role in protecting heart health.
        Perform Text Summarization:.`,
        output: `"A study suggests regular green tea consumption might be linked to a lower risk of heart disease due to its potential antioxidant properties."`,
      },
    ],

    code_snippet: `Unfortunately 
    // Simulate fetching data from a hypothetical XLNet API
async function fetchXLNetResponse(text) {
  console.log("**Simulation: Fetching XLNet response (assuming a public API existed)...**");

  // Replace with placeholder data (assuming response format)
  const simulatedResponse = {
    text: text,
    analysis: {
      tasks: [
        {
          name: "Question Answering",
          // Replace with example answer based on hypothetical task
          answer: "This functionality might require additional context for XLNet to answer."
        },
        {
          name: "Text Summarization",
          // Replace with example summary based on hypothetical task
          summary: "XLNet could potentially provide a concise summary of the text here."
        }
      ]
    }
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(simulatedResponse);
    }, 1000); // Simulate a delay (adjust as needed)
  });
}

// Example usage
const userInput = "What is the capital of France?";

fetchXLNetResponse(userInput)
  .then(response => {
    if (response) {
      console.log("**Simulated XLNet Response:**", response);
      // Process the simulated response data (e.g., display analysis results)
    } else {
      console.error("Failed to get simulated XLNet response");
    }
  })
  .catch(error => console.error("Error:", error));
 `,
    provider_name: "Google AI",
    provider_description:
      "Google AI is a leading force in artificial intelligence research and development. Their commitment to responsible innovation and democratizing AI positions them as a key player in shaping the future of this transformative technology. At its core, Google AI strives to fulfill Google's overall mission: to organize the world's information and make it universally accessible and useful. They aim to democratize AI by developing and deploying AI tools and technologies that can benefit a wide range of users and applications..",
  },
];

module.exports = models;
