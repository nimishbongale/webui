import { ReactElement } from 'react'
import './table.scss'

interface TableProps {
    id?: string
    columns?: string[]
    rows?: any[][]
    footer?: string[]
}

export const Table = ({ columns, rows, id, footer }: TableProps) => {
    return (
        <div className="table-container">
            <table className="rucio-table bordered striped narrow hoverable fullwidth">
                <thead>
                    <tr>
                        {columns?.map((columnTitle: string, index: number) => (
                            <th key={index}>
                                <abbr title={columnTitle}>{columnTitle}</abbr>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows?.map((rowData: ReactElement[], index: number) => (
                        <tr
                            key={index}
                            id={id ?? '' + index}
                            onClick={() => {
                                const currentSelectedRow =
                                    document.getElementById(id ?? '' + index)
                                if (currentSelectedRow) {
                                    currentSelectedRow.className =
                                        currentSelectedRow.className ===
                                        'selected'
                                            ? ''
                                            : 'selected'
                                }
                            }}
                        >
                            <th>{index + 1}</th>
                            {rowData?.map((rowElement: ReactElement) => (
                                <td>{rowElement.toString()}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        {footer?.map((footerTitle: string, index: number) => (
                            <th key={index}>
                                <abbr title={footerTitle}>{footerTitle}</abbr>
                            </th>
                        ))}
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
