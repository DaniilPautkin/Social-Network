export type PhotosType = {
    small: string | null
    large: string | null
}

export type ContactsType = {
    skype: string
    vk: string
    facebook: string
    icq: string
    email: string
    googlePlus: string
    twitter: string
    instagram: string
    whatsApp: string
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}
export type DialogueType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}