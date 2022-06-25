function RepeatHooks() {

	// useState

	// 1 возьмите под контроль react этои jsx элементы (input text, select, input checkbox) c помощью useState
	// 2 вместо отправки формы по submit отобразите в элементе c классом show значения элементов формы

	return (
		<>
			<form>

				<label>input</label>
				<input type="text" />

				<select>
					<option value="dark">dark</option>
					<option value="light">light</option>
				</select>

				<input type='checkbox' />

				<button type='submit'>submit</button>

			</form>


			<div className='increment'>{  }</div>


			<div className='show'>
				{

				}
			</div>

		</>

	)


	// useEffect
	// 1 при изменении text input отобразите его значение в document.title браузера



	// useContext
	// создайте файл с цветовой темой 
	// theme={dark:{color:white,background:black},light:{color:black,background:gray}}
	// вынесите button в отдельный компонент и используйте контекст, чтобы менять её style
	// смена value у Context.Provider должна происходить в зависимости от выбора темы в select



	// useRef
	// при клике на label поместите фокус в text input, не используя htmlFor



	// useMemo
	// в элемент с классом increment отобразите количество изменений(onChange) 
	// мемоизируйте функцию расчета изменений, исключив из неё события изменения чекбокса



	// custom hooks
	// придумайте или найдите в сети возможности улучшить ваш код с помощью кастомных хуков

}





export default RepeatHooks;