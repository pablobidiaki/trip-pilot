export interface LlmProvider{
    generate(prompt: string) : Promise<string>
}