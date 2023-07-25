
export const Inicio = () => {
  return (
    <>
        <div id="#nosotros">
            <h1 className="class_title_mem position-relative">Nosotros</h1>
            <hr style={{"color": "#555", "background": "#eeee", "height": "3px"}} />
            <p className="class_01_body">
                Somos una <strong style={{"fontWeight": "600"}}>iniciativa</strong> enfocada en la <strong>Salud</strong> de la <strong>Mujer</strong> principalmente en la <strong>prevención</strong> del <strong>Cáncer de Mama</strong> a través de <strong>estudios preventivos no invasivos</strong>, así como <strong>campañas</strong> de <strong>divulgación</strong> y <strong>concientización</strong>, que las encamine a llevar una vida más <strong>saludable y consciente</strong>.

                Colaboramos con <strong>Fundaciones</strong> y <strong>Asociaciones</strong> para difundir hábitos que contribuyan con nuestra Iniciativa en los siguientes rubros: <strong>estudios preventivos, alimentación, ejercicio, cuidado del sueño, prevención de adicciones,</strong> entre otros.
            </p>
        </div>
        <div className="row mt-5">
            <div id="mision" className="col-md-6 mision">
                <h3>Misión</h3>
                <p>
                    Concientizar a las Mujeres en el cuidado de su Salud, mediante campañas de divulgación, talleres y estudios preventivos no invasivos, que contribuyan con la reducción y prevención del Cáncer de Mama, y con llevar un estilo de vida más saludable.   
                </p>
                <i className="icon_info_box">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stethoscope" width="100" height="100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M6 4h-1a2 2 0 0 0 -2 2v3.5h0a5.5 5.5 0 0 0 11 0v-3.5a2 2 0 0 0 -2 -2h-1" />
                    <path d="M8 15a6 6 0 1 0 12 0v-3" />
                    <path d="M11 3v2" />
                    <path d="M6 3v2" />
                    <path d="M20 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    </svg>
                </i>
            </div>
            <div id="vision" className="col-md-6 vision">
                <h3>Visión</h3>
                <p>
                    Ser una de las Instituciones con mayor impacto en el cuidado de Salud de las Mujeres en la reducción y prevención del Cáncer de Mama, implementando programas de Salud con Fundaciones, Empresas e Instituciones de Gobierno.

                </p>
                <i className="icon_info_box">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-gender-female" width="100" height="100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 9m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
                <path d="M12 14v7" />
                <path d="M9 18h6" />
                </svg>
                </i>
            </div>
        </div>
        
    </>
  )
}
