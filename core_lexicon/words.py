class Word:
    """
    Master blueprint for all word types.
    ask_question() must be implemented by subclasses.
    """
    def __init__(self, english: str, word_type: str):
        self.english = english
        self.word_type = word_type

    def ask_question(self) -> str:
        # NotImplementedError is a built-in Python feature
        # It means 'This feature isn't implemented here;
        # it should be implemented in subclasses'.
        # raise ends the program when Python hits it & prints the
        # message to terminal
        raise NotImplementedError("Subclasses must implement their own ask_question()")
    
    def check_answer(self, user_answer: str) -> bool:
        user_answer = user_answer.strip().lower()
        possible_answers = self.english.lower().split(', ')
        return user_answer in possible_answers

class Noun(Word):
    def __init__(self, nominative: str, genitive: str, gender: str, english: str, word_type: str):
        super().__init__(english, word_type)
        self.nominative = nominative
        self.genitive = genitive
        self.gender = gender

    def ask_question(self) -> str:
        question_text = f"{self.nominative}, {self.genitive}, {self.gender}"
        return question_text
      
class NotNoun(Word):
    def __init__(self, dict_form: str, other_forms: str, english: str, word_type: str):
        super().__init__(english, word_type)
        self.dict_form = dict_form

        # Although 'other_forms' implies multiple forms and thus
        # some sort of list, at this stage, it only needs
        # to be a string.
        # In the future, if I make e.g., a verbs ending tester
        # then this would be different for a Verb subclass
        self.other_forms = other_forms

    def ask_question(self) -> str:
        question_text = f"{self.dict_form}, {self.other_forms}"
        return question_text
