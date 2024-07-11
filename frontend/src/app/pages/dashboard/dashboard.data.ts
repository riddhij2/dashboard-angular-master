export interface blogcard {
    title: string,
    subtitle: string,
    subtext: string,
    image: string,
    route: string
}

export const blogcards: blogcard[] = [

    {
        title: 'ChatGPT',
        subtitle: 'Generate conversational AI responses',
        subtext: 'Generate conversational AI responses',
        image: 'assets/img/brand/chat-gpt.png',
        route: '/chat-window'
    },
    {
        title: 'Image Generator',
        subtitle: 'Create visual content from text descriptions',
        subtext: 'Create visual content from text descriptions',
        image: 'assets/img/brand/image-generator.png',
        route: '/tables'
    },
    {
        title: 'Translate Your Files',
        subtitle: 'Translate your files in any choosen language',
        subtext: 'Translate your files in any choosen language',
        image: 'assets/img/brand/translate-your-file.png',
        route: '/icons'
    },
    {
        title: 'Bring Your Own File',
        subtitle: 'Retrieve summaries or queries from the documents',
        subtext: 'Retrieve summaries or queries from the documents',
        image: 'assets/img/brand/byof.png',
        route: '/tables'
    },

    {
        title: 'Transcribe Your Files',
        subtitle: 'Transcribe your audio/video files',
        subtext: 'Transcribe your audio/video files',
        image: 'assets/img/brand/transcribe-your-file.png',
        route: '/icons'
    },
    // {
    //     title: 'Research Assistant',
    //     subtitle: 'Transcribe your audio/video files',
    //     subtext: 'Transcribe your audio/video files',
    //     image: 'assets/img/brand/transcribe-your-file.png',
    //     route: '/icons'
    // },

] 