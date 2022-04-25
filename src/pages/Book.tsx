import * as React from "react";
import { useState, useEffect } from "react";
import { getBook, getCategories, getCount } from "../function/book";
import { Table, Select, Pagination, Image } from "antd";

const Book = () => {
    const { Option } = Select;
    const [category, setCategory] = useState<any>([]);
    const [book, setBook] = useState<Array<any>>([]);
    const [chooseCategory, setChooseCategory] = useState(1);
    const [page, setPage] = useState<number>(1);
    const [count, setCount] = useState<number>(0);
    const size = 10;

    useEffect(() => {
        getCategories().then((res) => {
            setCategory(res.data);
        });
    }, []);

    useEffect(() => {
        getBook(page, size, chooseCategory).then((res) => {
            setBook([...res.data]);
        });
    }, [page, chooseCategory]);

    useEffect(() => {
        getCount(chooseCategory).then((res) => setCount(res.data.length));
    }, [chooseCategory]);

    const onChangeHandler = (value: number) => {
        setChooseCategory(value);
    };

    const columns = [
        {
            title: "Id",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Cover",
            dataIndex: "cover_url",
            key: "cover_url",
            render: (text: any, record: any) => {
                return <Image src={record.cover_url} width={100} />;
            },
        },
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "Author",
            dataIndex: "authors",
            key: "authors",
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
        },
    ];
    return (
        <div className="book">
            <div className="content">
                <Select
                    className="select-option"
                    placeholder="Pilih Kategori"
                    onChange={onChangeHandler}
                >
                    {category.map((d: any, i: any) => (
                        <Option key={i} value={d.id}>
                            {d.name}
                        </Option>
                    ))}
                </Select>
                <br />
                <Table columns={columns} dataSource={book} pagination={false} />
                <Pagination
                    current={page}
                    total={(count / 10) * 5}
                    onChange={(value) => {
                        setPage(value);
                    }}
                />
            </div>
        </div>
    );
};

export default Book;
