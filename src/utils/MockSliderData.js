
export const MockSliderData = [
    {
        "id": "fc67112e-f61f-4bb9-8318-5c4c2b27ac03",
        "owner": "0fd1583f-e9ad-42a7-8893-63f79da327be",
        "commands": [
            {
                "id": "4ff7368d-cb7f-4171-8053-bb8de394c0e0",
                "ai_id": "fc67112e-f61f-4bb9-8318-5c4c2b27ac03",
                "name": "Сhat completion",
                "payload": {
                    "messages": {
                        "class": "permanent",
                        "data_type": "object",
                        "values": [
                            {
                                "content": "Hello!",
                                "role": "user"
                            }
                        ]
                    },
                    "model": {
                        "class": "optional",
                        "data_type": "string",
                        "values": [
                            "gpt-4",
                            "gpt-3.5-turbo"
                        ]
                    }
                },
                "payload_type": "JSON",
                "request_type": "POST",
                "input_type": "Text",
                "output_type": "Text",
                "url": "https://api.openai.com/v1/chat/completions",
                "created_at": "2023-12-27T10:57:17.375502Z",
                "updated_at": "2023-12-27T10:57:17.375502Z"
            }
        ],
        "rate": 2,
        "description": "ChatGPT — это большая языковая модель, обученная OpenAI, которая использует глубокое обучение для генерации текста и ответов на вопросы. Эта модель была создана на основе технологии трансформеров, которая позволяет модели обрабатывать большие объемы текста и понимать связи между словами и предложениями.",
        "background_url": "https://s3.warehousai.com/backgrounds/background.04ef0216-acb4-47c2-a5ed-9ab63abe7f0c.jpg",
        "name": "ChatGPT",
        "used": 0,
        "created_at": "2023-12-27T10:50:23.288366Z",
        "updated_at": "2023-12-27T10:50:23.288366Z"
    },
    {
        "id": "f9169d6e-e149-4a19-8a11-063721aa828c",
        "owner": "0fd1583f-e9ad-42a7-8893-63f79da327be",
        "commands": [
            {
                "id": "5502f753-a34d-4c25-8fad-7b90ecc84424",
                "ai_id": "f9169d6e-e149-4a19-8a11-063721aa828c",
                "name": "Text To Image",
                "payload": {
                    "aspect_ratio": {
                        "class": "optional",
                        "data_type": "string",
                        "values": [
                            "1:1",
                            "3:2",
                            "4:3",
                            "3:4",
                            "16:9",
                            "9:16"
                        ]
                    },
                    "high_res_results": {
                        "class": "optional",
                        "data_type": "number",
                        "values": [
                            0,
                            1
                        ]
                    },
                    "prompt": {
                        "class": "free",
                        "data_type": "string",
                        "values": []
                    },
                    "style_id": {
                        "class": "optional",
                        "data_type": "number",
                        "values": [
                            21,
                            29,
                            26
                        ]
                    }
                },
                "payload_type": "FormData",
                "request_type": "POST",
                "input_type": "Text",
                "output_type": "Image",
                "url": "https://api.vyro.ai/v1/imagine/api/generations",
                "created_at": "2023-12-27T13:56:44.877316Z",
                "updated_at": "2023-12-27T13:56:44.877316Z"
            }
        ],
        "rate": 4,
        "description": "Imagine - это инновационная нейросеть, воплощающая в себе виртуозное сочетание искусства и технологии. Это волшебное творение алгоритмов, способных превратить ваши фантазии в живописные произведения искусства.",
        "background_url": "https://s3.warehousai.com/backgrounds/background.407d9a25-e35d-4e45-a22a-1e257196b644.jpg",
        "name": "Imagine",
        "used": 0,
        "created_at": "2023-12-27T13:50:22.957489Z",
        "updated_at": "2023-12-27T13:50:22.957489Z"
    },
    {
        "id": "48017ad2-01c6-46ea-9762-9c2b40ed4122",
        "owner": "0fd1583f-e9ad-42a7-8893-63f79da327be",
        "commands": [
            {
                "id": "752bb7c5-ad55-4b12-a0ca-08eb7114ba18",
                "ai_id": "48017ad2-01c6-46ea-9762-9c2b40ed4122",
                "name": "Text To Speech | American Female",
                "payload": {
                    "text": {
                        "class": "free",
                        "data_type": "string",
                        "values": []
                    },
                    "voice_settings": {
                        "class": "permanent",
                        "data_type": "object",
                        "values": [
                            {
                                "similarity_boost": 0.5,
                                "stability": 0.5
                            }
                        ]
                    }
                },
                "payload_type": "JSON",
                "request_type": "POST",
                "input_type": "Text",
                "output_type": "Audio",
                "url": "https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM",
                "created_at": "2023-12-27T14:45:04.99685Z",
                "updated_at": "2023-12-27T14:45:04.99685Z"
            },
            {
                "id": "4fc7e508-1f2c-4adf-a4a6-696c6a9e9b82",
                "ai_id": "48017ad2-01c6-46ea-9762-9c2b40ed4122",
                "name": "Text To Speech | American Male",
                "payload": {
                    "text": {
                        "class": "free",
                        "data_type": "string",
                        "values": []
                    },
                    "voice_settings": {
                        "class": "permanent",
                        "data_type": "object",
                        "values": [
                            {
                                "similarity_boost": 0.5,
                                "stability": 0.5
                            }
                        ]
                    }
                },
                "payload_type": "JSON",
                "request_type": "POST",
                "input_type": "Text",
                "output_type": "Audio",
                "url": "https://api.elevenlabs.io/v1/text-to-speech/2EiwWnXFnvU5JabPnv8n",
                "created_at": "2023-12-27T14:47:36.440401Z",
                "updated_at": "2023-12-27T14:47:36.440401Z"
            }
        ],
        "rate": 5,
        "description": "Генерируйте реалистичную речь с помощью самой передовой модели голоса AI из когда-либо существовавших. Создавайте голоса AI за считанные минуты и мгновенно конвертируйте текст в речь онлайн на любом языке.",
        "background_url": "https://s3.warehousai.com/backgrounds/background.d83ada50-50f0-4e0c-b001-08cb12d49210.png",
        "name": "ElevenLabs",
        "used": 0,
        "created_at": "2023-12-27T14:19:25.045284Z",
        "updated_at": "2023-12-27T14:19:25.045284Z"
    }
]