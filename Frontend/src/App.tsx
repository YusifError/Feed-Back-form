import './App.css'
import './Style/SendButton.css'
import { BtnGithub } from './SocialMedia/github/github.tsx'
import { BtnTelegram } from './SocialMedia/telegram/telegram.tsx'
import './SocialMedia/github/github.css'
import './SocialMedia/telegram/telegram.css'
import { useForm } from 'react-hook-form'


type Myform = {
  name: string;
  email: string;
  message: string;
};

function App() {

  const { register, handleSubmit, reset } = useForm<Myform>()

  const Submit = async (data:any) => {
    console.log(data);
    alert('Thanks!');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(Submit)}>
      <h1 className='mainText'>Feedback me</h1>
      <div className="FeedBackBlock">
        <input className='Name' placeholder='Name' {...register('name')} />
        <input className='Email' placeholder='Email' {...register('email', { required: true })} />
        <textarea className='Message' placeholder='Message' {...register('message', { required: true })} />
        <button className="button type1">
          <span className="btn-txt">Send</span>
        </button>
      </div>
      <h2 className='Link'>Social links</h2>
      <div className='SocialMedia'>
        <BtnGithub />
        <BtnTelegram />
      </div>
    </form>
  )
}

export default App
