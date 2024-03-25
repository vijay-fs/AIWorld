import { Voice as VoiceResponse } from "elevenlabs/api";

export const userRole = "user";
export const botRole = "assistant";

export interface Message {
  role: typeof userRole | typeof botRole;
  content: string;
}

export interface ChatVoiceProps {
  voices: VoiceResponse[];
  selectedVoice: string;
  setSelectedVoice: (voice: string) => void;
}

export interface ChatMessagesProps {
  messages: Message[];
}

export interface ChatInputProps {
  input: string;
  setInput: (input: string) => void;
  loading: boolean;
  sendMessage: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface ChatControlsProps {
  audioRef: React.RefObject<HTMLAudioElement>;
  savedAudio: boolean;
  messages: Message[];
  clearMessages: () => void;
}

export interface StoreApiKeysProps {
  isModal: boolean;
  setIsModal: (isModal: boolean) => void;
  setOpenAiKey: (openAiKey: string) => void;
  setElevenLabsKey: (elevenLabsKey: string) => void;
}
