import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';

const ContactForm = () => {
	return (
    <div className="w-full lg:w-1/2">
      <div className="leading-loose">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
        >
          <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
            연락처 양식
            {/* 한글로 */}
          </p>
          <FormInput
            inputLabel="전체 이름"
            labelFor="name"
            inputType="text"
            inputId="name"
            inputName="name"
            placeholderText="당신의 이름"
            ariaLabelName="이름"
          />
          <FormInput
            inputLabel="이메일"
            labelFor="email"
            inputType="email"
            inputId="email"
            inputName="email"
            placeholderText="당신의 이메일"
            ariaLabelName="이메일"
          />
          <FormInput
            inputLabel="제목"
            labelFor="subject"
            inputType="text"
            inputId="subject"
            inputName="subject"
            placeholderText="제목"
            ariaLabelName="제목"
          />

          <div className="mt-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="message"
            >
              메시지
            </label>
            <textarea
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              id="message"
              name="message"
              cols="14"
              rows="6"
              aria-label="메시지"
            ></textarea>
          </div>

          <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
            <Button
              title="메시지 보내기"
              type="submit"
              aria-label="메시지 보내기"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
